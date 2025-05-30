import { NextResponse } from "next/server";

// In-memory store for access token and expiration
let accessToken: string | null = null;
let tokenExpiration: number | null = null;

async function refreshAccessToken(): Promise<string> {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID!}:${process.env.SPOTIFY_CLIENT_SECRET!}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to refresh access token");
    }

    if (!data.access_token || typeof data.access_token !== "string") {
      throw new Error("Invalid access token received");
    }

    accessToken = data.access_token;
    tokenExpiration = Date.now() + (data.expires_in - 300) * 1000;
    return accessToken;
  } catch (error: unknown) {
    console.error("Token refresh error:", error);
    throw error;
  }
}

export async function GET() {
  try {
    // Check if token is missing or expired
    if (!accessToken || !tokenExpiration || Date.now() >= tokenExpiration) {
      await refreshAccessToken();
    }

    const playbackResponse = await fetch(
      "https://api.spotify.com/v1/me/player",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (playbackResponse.status === 204) {
      return NextResponse.json({
        isListening: false,
        message: "Not listening",
      });
    }

    if (!playbackResponse.ok) {
      // If unauthorized (401), try refreshing token once
      if (playbackResponse.status === 401) {
        await refreshAccessToken();
        const retryResponse = await fetch(
          "https://api.spotify.com/v1/me/player",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (retryResponse.status === 204) {
          return NextResponse.json({
            isListening: false,
            message: "Not listening",
          });
        }
        if (!retryResponse.ok) {
          throw new Error("Failed to fetch playback state after token refresh");
        }
        const retryData = await retryResponse.json();
        const isListening = retryData.is_playing;
        if (!isListening || !retryData.item) {
          return NextResponse.json({
            isListening: false,
            message: "Not listening",
          });
        }
        const isTrack = retryData.item.type === "track";
        const isEpisode = retryData.item.type === "episode";
        if (!isTrack && !isEpisode) {
          return NextResponse.json({
            isListening: false,
            message: "Unsupported media type",
          });
        }
        return NextResponse.json({
          isListening,
          trackName: retryData.item.name,
          artistName: isTrack
            ? retryData.item.artists[0].name
            : retryData.item.show.name,
        });
      }
      throw new Error("Failed to fetch playback state");
    }

    const playbackData = await playbackResponse.json();
    const isListening = playbackData.is_playing;
    if (!isListening || !playbackData.item) {
      return NextResponse.json({
        isListening: false,
        message: "Not listening",
      });
    }

    const isTrack = playbackData.item.type === "track";
    const isEpisode = playbackData.item.type === "episode";
    if (!isTrack && !isEpisode) {
      return NextResponse.json({
        isListening: false,
        message: "Unsupported media type",
      });
    }

    return NextResponse.json({
      isListening,
      trackName: playbackData.item.name,
      artistName: isTrack
        ? playbackData.item.artists[0].name
        : playbackData.item.show.name,
    });
  } catch (error: unknown) {
    console.error("Spotify API error:", error);
    return NextResponse.json(
      { isListening: false, message: "Error fetching Spotify data" },
      { status: 500 }
    );
  }
}
