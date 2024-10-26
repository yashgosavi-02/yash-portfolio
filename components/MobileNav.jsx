"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link"; 
import {CiMenuFries} from "react-icons/ci"
const MobileNav = () => {
  const pathname = usePathname();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
    ];
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">Yash<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link,index) =>{
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent" } text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}
export default MobileNav;
