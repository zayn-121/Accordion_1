import React, { useState } from "react";

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div
      className={`flex  w-6/12 shadow cursor-pointer p-5 mt-5 relative ${isOpen ? "border-t-4 border-green-800" : ""}`}
      onClick={() => handleClick()}
    >
      <div className=" ">
        <span className= {`text-3xl m-5 font-bold ${isOpen ? "text-green-800" : "text-black"}`}>
          {num < 10 ? `0${num + 1} ` : num}
        </span>
        <span className={`text-3xl m-5 font-bold ${isOpen? "text-green-800" : "text-black"}`}>{title}</span>
        {isOpen && <p className="ml-24 mt-5 text-xl">{text}</p>}
      </div>
      <div className="text-3xl absolute top-10 right-5 ">{isOpen ? "-" : "+"}</div>
    </div>
  );
};

export default AccordionItem;
