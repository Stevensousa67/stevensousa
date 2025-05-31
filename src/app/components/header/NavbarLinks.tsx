const navbarItems = ['About','Projects','Skills','Contact'];

export default function NavbarLinks({className}: {className?: string}) {
    return (
        <ul className={className}>
            {navbarItems.map((item) => (
                <li key={item} className="relative group cursor-pointer text-md font-medium text-muted-foreground hover:text-foreground">
                    {item}
                    {/* <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-red-400 transition-all duration-300 group-hover:w-full"></span> */}
                </li>
            ))}
        </ul>
    );
}