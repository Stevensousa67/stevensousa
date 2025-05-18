import Image from 'next/image';
import { SocialMediaItem } from './SocialMediaLinks';

export default function SocialMedia({ url, icon, name }: SocialMediaItem) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={`${name} Icon`} width={24} height={24} />
    </a>
  );
}