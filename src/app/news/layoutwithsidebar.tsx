import Link from 'next/link'
import React from 'react'

const Newslayout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <nav className='space-x-3'>
            <Link href="/news/sports">Sports</Link>
            <Link href="/news/health">Health</Link>
            <Link href="/news/tech">Technology</Link>
        </nav>
        <div className='flex'>
            <div className='w-4/5 h-96 bg-slate-200'>
            {children}
            </div>
            <div className='w-1/5 bg-pink-200'>
                Sidebar
            </div>
        </div>
      </div>
  )
}

export default Newslayout