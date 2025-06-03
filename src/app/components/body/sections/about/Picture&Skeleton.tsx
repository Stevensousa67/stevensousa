'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

export default function PictureAndSkeleton() {
    const baseUrl = process.env.NEXT_PUBLIC_AWS_S3_BASE_URL;
    const imageSrc = `${baseUrl}Steven+Sousa.jpeg`;
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div className="relative overflow-hidden rounded-full w-40 h-40">
            {!isImageLoaded && <Skeleton className="w-40 h-40 rounded-full absolute inset-0 z-0" />}
            <Image src={imageSrc} alt="Steven Sousa" width={160} height={160} className={`rounded-full object-cover relative z-10 transition-opacity duration-500 ease-in-out ${!isImageLoaded ? 'opacity-0' : 'opacity-100'}`} onLoad={() => setIsImageLoaded(true)}/>
        </div>
    );
}