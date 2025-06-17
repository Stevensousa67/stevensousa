import Link from 'next/link';
const navbarItems = ['About', 'Projects', 'Resume', 'Contact'];

export default function NavbarLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {navbarItems.map((item) => (
        <Link href={item === 'Resume' ? '/Steven Sousa - Resume.pdf' : `/${item.toLowerCase()}`} key={item} className="no-underline" {...(item === 'Resume' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          <li className="relative group cursor-pointer text-md font-medium text-muted-foreground hover:text-foreground">
            {item}
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>
      ))}
    </ul>
  );
}