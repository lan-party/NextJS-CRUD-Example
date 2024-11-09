'use client';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

    return (
        <nav className="flex mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center lg:flex-grow pt-3 text-stone-50" style={{ textDecoration: 'none' }}>
                <Image src="/assets/images/flame.gif" width={40} height={40} className="object-contain" alt="flame icon" />
                <span>Home</span>
            </Link>
            <div className="sm:flex hidden">
                <div className="flex gap-3 md:gap-5">
                    <Link href="/new-post" className="nes-btn is-primary" >Create Post</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
