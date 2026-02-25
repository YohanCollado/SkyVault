import React from "react";
import Image from "next/image";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex min-h-screen">
            <section className="justify-center hidden w-1/2 items-center bg-brand p-10 lg:flex xl:w-2/5"> 
                <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                    <Image 
                        src="/logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                        className="rounded-full">
                    </Image>
                    <div className= "space-y-t text-white">
                        <h1 className='h1'>Best Storage you will ever find</h1>
                        <p className="body-1">
                            This is a place to store all your documents
                        </p>
                    </div>
                    <Image
                    src="/photo.png"
                    alt="Files"
                    width={342}
                    height={342}
                    className="transition-all hover:rotate-2 hover:scale-105"></Image>
                </div>
            </section>
            {/* Under this we will create the right side of the screen*/}
            <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hiden">
                    <Image 
                        src="/logo.png"
                        alt="logo"
                        width={224}
                        height={82}
                        className="h-auto w-[200px] lg:w-[250px]">
                    </Image>
                </div>
            {children}
            </section> 
        </div>
    )
}

export default Layout;