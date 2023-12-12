import React from 'react'
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
        href: "/contacts",
        title: "Контакти"
    },
]

export default function NavBar() {
    return (
        <header>
            <nav className="sticky flex justify-center py-4">
                <ul className="flex gap-8 text-xl font-semibold">
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
