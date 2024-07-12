import React from 'react'
import logo3D from '../../Assets/logo-3d-03.png'
import Button from '../../Components/Button/Button'

const AboutSection = () => {
  return (
    <div className={` creative-bg `}>
        <div className='px-6 md:px-32 py-8 md:py-16 bg-gradient-to-t from-[#111] to-[30%] to-[#0000]'>
            <div className='grid md:grid-cols-12'>
                <div className='grid gap-2 md:gap-4 col-span-7' >
                    <p className='text-2xl md:text-5xl font-bold  md:leading-tight bg-clip-text bg-gradient-to-r from-[#f6891f] to-rose-600 text-transparent' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, alias ea aperiam aliquid in ipsa!</p>
                    <p className='text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores laborum magnam mollitia quibusdam odit dolores laboriosam natus? Pariatur, dolorum?</p>
                    <div className=''>
                        <Button name='more' />
                    </div>
                </div>
                <div className='col-span-5 grid place-items-center py-4 px-16 md:px-0'>
                    <img className='w-full' src={logo3D} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection