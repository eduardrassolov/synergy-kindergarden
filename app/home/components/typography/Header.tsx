import React from 'react'

export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-center text-2xl font-semibold mb-4">{children}</h2>
    )
}
