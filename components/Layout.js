import Nav from "@/components/nav";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";
import Logo from "./Logo";

export default function Layout({ children }) {
    const [showNav, setShowNav] = useState(false)
    const { data: session } = useSession()
    if (!session) {
        return (
            <div className="bg-bgGray w-screen h-screen flex items-center">
                <div className="text-center w-full">
                    <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
                </div>11
            </div>
        );
    }

    return (
        <div className="bg-bgGray min-h-screen">
            <div className={(showNav) ? "hidden" : "" + " md:hidden flex items-center p-4"}>
                <button onClick={() => setShowNav(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <di className="flex grow justify-center mr-6">
                    <Logo />
                </di>
            </div>
            <div className=" flex">
                <Nav show={showNav} />
                <div className=" flex-grow p-4">
                    {children}
                </div>
            </div>
        </div >
    );
}
