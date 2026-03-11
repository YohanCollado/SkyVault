'use client'

import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { avatarPlaceholderUrl, navItems } from "@/constants";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaSignOutAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";


interface Props {
    ownerId: string;
    accountId: string;
    fullName: string;
    avatar: string;
    email: string;
}

const MobileNavigation = 
    ({ ownerId, accountId, fullName, avatar, email}: Props) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    console.log("Mobile Navigator: ", {email, fullName})
    
    return (
        <header className="mobile-header">
            <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={60}
            className="h-auto"
            />

            <Sheet open={open} onOpenChange={setOpen}>
                <button onClick={() => setOpen(true)}>
                    <GiHamburgerMenu className="h-8 w-8 hover:scale-105"/>
                </button>
                <SheetContent className="shad-sheet h-screen px-3">
                    <SheetTitle>
                        <div className=" header-user">
                            <Image
                                src={avatarPlaceholderUrl}
                                alt="avatar"
                                width={44}
                                height={44}
                                className="header-user-avatar"
                            />
                            <div className="sm:hidden lg:block">
                                <p className="subtitle-2 capitalize">{fullName}</p>
                                <p className="caption">{email}</p>
                            </div>
                        </div>
                    <Separator className="mb-4 bg-light-200/20"/>
                    </SheetTitle>
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-nav-list">
                            {navItems.map(({url, name, icon: Icon, dark}) => (
                        <Link key ={name} href={url} className="lg:w-full">
                            <li className={cn("mobile-nav-item", pathname === url && "shad-active")}>
                                <Icon 
                                    size={24} 
                                    className={cn(dark && "text-black", pathname === url && "nav-icon-active")}
                                />
                                <p>{name}</p>
                            </li>
                        </Link>
                    ))}
                        </ul>
                    </nav>
                    <Separator className="my-5 bg-light-200/20"/>

                    <div className="flex flex-col justify-between gap-5 pb-5">
                        <FileUploader/>
                        <Button 
                            type="submit" 
                            className="mobile-sign-out-button" 
                            onClick={async () =>  await signOutUser()}>
                            <FaSignOutAlt/>
                            <p>Logout</p>
                        </Button>
                    </div>

                </SheetContent>
            </Sheet>
        </header>
    )
}
export default MobileNavigation;