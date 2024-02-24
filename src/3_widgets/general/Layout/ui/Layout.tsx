import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import {useScrollTop} from "../../../../6_shared/hooks/useScrollTop.tsx";

interface ILoyoutProps {
    className?: string,
    headerLight?: boolean,
    children: React.ReactNode
}

export const Layout: React.FC<ILoyoutProps> = ({className, headerLight, children}) => {
    useScrollTop()

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