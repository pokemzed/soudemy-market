import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

interface ILoyoutProps {
    className?: string,
    headerLight?: boolean,
    children: React.ReactNode
}

export const Layout: React.FC<ILoyoutProps> = ({className, headerLight, children}) => {
    return (
        <div className={className}>
            <Header headerLight={headerLight}/>
            <main className={"content"}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}