import { Children } from "react"
import { Footer, HeaderNav } from "./HeaderNav"

export const MainLaytout = ({ children }) => {
    return (
        <div>
            <HeaderNav />
            {children}
            <Footer />
        </div>)
}