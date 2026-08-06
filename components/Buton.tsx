import React from 'react'
import Link from 'next/link'
const BlueButon = () => {
    return (
        <Link
            href="/meniu/pizza"
            className="bg-[#00043B] hover:bg-[#0c005e]  text-white font-serif px-6 py-2 rounded border border-blue-400/30 transition-colors"
        >
            Vezi mai mult
        </Link>
    )
}

export default BlueButon