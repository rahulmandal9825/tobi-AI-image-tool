"use client"

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'

const MobileNav = () => {

  const pathname = usePathname();
  return (
    <header className='header'>
      <Link href="/" className='flex items-center gap-2 md:py-2'>
        <Image src="/logo.png" alt='logo' width={130} height={50} />
      </Link>
      <nav className='flex gap-2 '>
        <SignedIn>
        <div className=' self-center'>
             <UserButton afterSignOutUrl="/" />
        </div>
     
        <Sheet>
  <SheetTrigger>
    <Image src="/assets/icons/menu.svg" alt='menu' width={50} height={50} className=' cursor-pointer'/>
  </SheetTrigger>
  <SheetContent className='sheet-content md:w-64'>
    <>
    <Link href="/" className="sidebar-logo">
                    <Image alt="logo" src="/logo.png" 
                    width={370} 
                    height={100}
                     />
                </Link>

      
                <div className="text-xl ">

                            {navLinks.map((link) => {
                                const isActive = link.route === pathname;
                                return (
                                    <div
                                        key={link.route}
                                        className={`my-3 flex whitespace-nowrap  w-full py-3 p-2  rounded-lg ${
                                            isActive ? " bg-orange-400 text-white shadow-2xl scale-110" : "text-dark-700"
                                        }`}
                                    >
                                        <Link href={link.route} className=" cursor-pointer flex gap-2">
                                            <Image
                                                alt="logo"
                                                src={link.icon}
                                                width={20}
                                                height={20}
                                                className={`${isActive && " brightness-200"}`}
                                            />
                                            <h2>{link.label}</h2>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
    </>

  </SheetContent>
</Sheet>
      

        </SignedIn>
        <SignedOut>
                        <Button asChild>
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
      </nav>
             


    </header>
  )
}

export default MobileNav
