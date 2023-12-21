import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard, MdFeaturedPlayList } from "react-icons/md";
import { RiStickyNoteFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline, IoIosArrowDown } from "react-icons/io";
import Accordion from './accordion/Accordion';

export default function SidebarContent() {
    const accordionItems = [
        { icon: <RiStickyNoteFill />, title: 'Notes', contentOne: 'Create Note', contentTwo: 'View Notes' },
    ];

  return (
    <div className='relative w-full h-full'>
        <div className="flex flex-col justify-between h-full items-center w-full">
            <div className="flex flex-col w-full">
            <span className='text-2xl font-bold text-zinc-800 font-sans mb-5 px-5'>RapidRemind</span>
                <ul className='flex flex-col gap-y-1 w-full'>
                    <li className='hover:bg-zinc-200 px-5'>
                        <Link className='font-[400] text-zinc-500 flex justify-start items-center gap-x-1 text-sm py-2'>
                        <MdOutlineDashboard />
                        Dashboard
                        </Link>
                    </li>
                    <li className='hover:bg-zinc-200 px-5'>
                        <div className='font-[400] text-zinc-500 flex justify-between items-center gap-x-1 text-sm py-2'>
                         <Accordion items={accordionItems}/>
                        </div>
                    </li>
                    <li className='hover:bg-zinc-200 px-5'>
                        <div>
                        <Link className='font-[400] text-zinc-500 flex justify-start items-center gap-x-1 text-sm py-2'>
                        <MdFeaturedPlayList />
                        Features
                        </Link>
                        </div>
                    </li>
                </ul>
            </div>

            <ul className='flex flex-col gap-y-1 w-full'>
                <li className='hover:bg-zinc-200 px-5'>
                    <div>
                    <Link className='font-[400] text-zinc-500 flex justify-start items-center gap-x-1 text-sm py-2'>
                    <IoMdSettings />
                    Settings
                    </Link>
                    </div>
                </li>
                <li className='hover:bg-zinc-200 px-5'>
                    <div>
                    <Link className='font-[400] text-zinc-500 flex justify-start items-center gap-x-1 text-sm py-2'>
                    <IoIosHelpCircleOutline />
                    Help & Support
                    </Link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
