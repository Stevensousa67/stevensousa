import Image from 'next/image';
import { SocialMediaItem } from './SocialMediaLinks';

export default function SocialMedia({ url, icon, name }: SocialMediaItem) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <Image src={icon} alt={`${name} Icon`} width={20} height={20} className="filter dark:invert" />
    </a>
  );
}