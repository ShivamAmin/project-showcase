import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {auth, signIn, signOut} from "@/auth";

const NavBar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-[a0a0a0] shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={174.465} height={137.41} />
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/project/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type="submit">Logout</button>
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default NavBar
