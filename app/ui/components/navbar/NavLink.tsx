'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface INavLink {
    href: string,
    text: string
}

export default function NavLink({ href, text }: INavLink) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`${pathname === href ? "text-cyan-600" : "text-cyan-900"}`}>
            {text}
        </Link>
    )
}
