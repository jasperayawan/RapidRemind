import React, { useState } from 'react'
import AccordionItem from '../accordion Item/AccordionItem';

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }

  return (
    <div className='w-full'>
        {items.map((item, index) => (
            <AccordionItem 
                key={index}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
                icon={item.icon}
                title={item.title}
                contentOne={item.contentOne}
                contentTwo={item.contentTwo}
            />
        ))}
    </div>
  )
}
