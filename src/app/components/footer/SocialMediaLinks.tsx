import { socialMedia } from '@/lib/socialMedia';
import SocialMedia from './SocialMedia';

export interface SocialMediaItem {
    name: string;
    url: string;
    icon: string;
}   

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-4">
      {socialMedia.map((media) => (
        <SocialMedia key={media.name} url={media.url} icon={media.icon} name={media.name} />
      ))}
    </div>
  );
}