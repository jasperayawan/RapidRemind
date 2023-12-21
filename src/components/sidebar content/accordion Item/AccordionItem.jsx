import React from 'react'
import { useSpring, animated } from 'react-spring';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineNoteAlt, MdOutlinePreview } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function AccordionItem({ isOpen, onClick, icon, title, contentOne, contentTwo }) {
    const contentAnimation = useSpring({
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
      });

  return (
    <div className='w-full'>
        <div onClick={onClick} className="cursor-pointer flex justify-between items-center w-full">
            <div className='flex flex-row gap-x-1 justify-start items-center'>{icon} {title}</div>
            <div>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </div>
        <animated.div style={{ overflow: 'hidden', ...contentAnimation }}>
        <div className='flex flex-col gap-y-2 p-[10px]'>
            <Link to='/createnote' className='flex flex-row gap-x-1 justify-start items-center'>
            <MdOutlineNoteAlt />
            {contentOne}
            </Link>
            <Link className='flex flex-row gap-x-1 justify-start items-center'>
            <MdOutlinePreview />
            {contentTwo}
            </Link>
        </div>
      </animated.div>
    </div>
  )
}
