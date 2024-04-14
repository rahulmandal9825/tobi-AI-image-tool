import React from 'react'

const Header = ({title, subtitle }: {title:string, subtitle?: string}) => {
  return (
    <div className='flex flex-col gap-4  text-black mt-6'>
        <h2 className='text-3xl font-bold'>
            {title}
        </h2>
            <h1 className='text-xl text-gray-500 '>
              {subtitle}.
              </h1>
       
    </div>
  )
}

export default Header