"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image"
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { avatarPlaceholderUrl } from "@/constants";


const Sidebar = () => {
    const pathname = usePathname();
    
    // Placeholder user info; replace these with real user data (props, context, or auth session)
    const fullName = "";
    const email = "";

    return (
        <aside className="sidebar">
            <Link href ="/">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    width={160}
                    height={50}
                    className="hidden h-auto lg:block"
                />
            </Link>

            <nav className="sidebar-nav">
                <ul className="flex flex-1 flex-col gap-6">
                    {navItems.map(({url, name, icon: Icon, dark}) => (
                        <Link key ={name} href={url} className="lg:w-full">
                            <li className={cn("sidebar-nav-item", pathname === url && "shad-active")}>
                                <Icon 
                                    size={24} 
                                    className={cn(dark && "text-black", pathname === url && "nav-icon-active")}
                                />
                                <p className="hidden lg:block">{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
                <Image
                    src="/icon.png"
                    alt="logo"
                    width={506}
                    height={418}
                    className="w-full"
                />
                <div className="sidebar-user-info">
                    <Image
                        src={avatarPlaceholderUrl}
                        alt="avatar"
                        width={44}
                        height={44}
                        className="sidebar-user-avatar"
                    />
                        <div className="hidden lg:block">
                            <p className="subtitle-2 capitalize"> {fullName}</p>
                            <p className="caption">{email}</p>
                        </div>
                </div>
        </aside>
    )
}

export default Sidebar;