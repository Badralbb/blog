
"use client"

import { Footer, HeaderNav } from "./HeaderNav"

export const MainLaytout = ({ children }) => {
    return (
        <div>
            <HeaderNav />
            {children}
            <Footer />
        </div>)
}