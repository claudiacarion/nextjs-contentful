import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='mb-12'>
      <div className="logo">
        <Image src="/pandalogo.png" alt="logo" width={100} height={100} />
        <h1 className='text-2xl'>contentful blog practice</h1>
      </div>
        <Link href="/" className='mr-2'>home</Link>
        <Link href="/posts">posts</Link>
    </nav>
  )
}

export default Navbar
