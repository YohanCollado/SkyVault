import React from "react";
import Search from "@/components/Search"
import FileUploader from "@/components/FileUploader"
import {Button} from "@/components/ui/button";
import { FaSignOutAlt } from "react-icons/fa";
import { signOutUser } from "@/lib/actions/user.actions";

const Header = () => {
    return(
        <header className="header">
            <Search/>
            <div className="header-wrapper">
                <FileUploader/>
                <form action={async () => {
                    'use server';

                    await signOutUser();
                }}>
                    <Button type="submit" className="sign-out-button">
                        <FaSignOutAlt />
                    </Button>
                </form>
            </div>
        </header>
    );
};
export default Header;;