import React from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({data}) => {
  return (
    <div className="w-full absolute left-3/4 top-5 transform -translate-x-1/2">
        {data.map((item, i) => <AccordionItem key = {item.title} num = {i} title = {item.title} text = {item.text} />)}
    </div>
  )
}

export default Accordion