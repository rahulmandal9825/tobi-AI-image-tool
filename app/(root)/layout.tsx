import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}: { children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
        <MobileNav/>
      <div className='root-container'>
        <div className=' max-w-5xl mx-auto px-5 md:px-10 w-full  text-gray-500'>
          {children}
        </div>
      </div>
     
    </main>
  )
}

export default Layout
