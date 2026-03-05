"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image"

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Link href ="/">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    width={160}
                    height={60}
                    className="h-auto lg:block"
                />
            </Link>
        </aside>
    )
}

export default Sidebar;