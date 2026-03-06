import { MdDashboard } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";import { FaImages } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoPieChart } from "react-icons/io5";

export const navItems = [
    {name: 'Dashboard', icon: MdDashboard, url: "/", dark: false},
    {name: 'Documents', icon: IoDocuments, url: "/documents", dark: true},
    {name: 'Images', icon: FaImages, url: "/images", dark: true},
    {name: 'Videos', icon: FaVideo, url: "/videos", dark: true},
    {name: 'Other', icon: IoPieChart, url: "/other", dark: true}

];

export const avatarPlaceholderUrl = 
    "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png";


export const MAX_FILE_SIZE = 50 * 1024 * 1024; //50mb