'use client'

import React, { useState } from 'react'
import NavLink from './NavLink'

const navBarLinks = [
    {
        href: "/home",
        title: "Головна"
    },
    {
        href: "/visitors",
        title: "Відвідувачам"
    },
    {
        href: "/blog",
        title: "Блог"
    },
    {
        href: "/contacts",
        title: "Контакти"
    },
]

export default function NavBar() {
    const [isBurgerOpen, setBurger] = useState<boolean>(false);
    const handleBurger = () => setBurger(prev => !prev);

    return (
        <header>
            <nav className="sticky flex justify-between py-4 border-solid border-[1px] px-4 mb-6">
                <h1 className="text-center flex text-3xl font-semibold">Синегрія</h1>
                <button onClick={handleBurger} className="sm:hidden sticky z-20 text-3xl">{isBurgerOpen ? "-" : "+"}</button>

                <ul className={`${isBurgerOpen ? "flex" : "hidden"} absolute sm:left-0 sm:flex-row z-10 top-0 right-0 py-10 px-6 h-[100vh] bg-white border-solid border-[1px] flex-col gap-4 text-xl font-semibold`}>
                    {navBarLinks.map((navLink, index) =>
                        <li key={`navBarLink_${index}`}>
                            <NavLink href={navLink.href} text={navLink.title} />
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    )
}
