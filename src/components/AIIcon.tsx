import React from 'react';
import  './AIIcon.css';
import { BiSolidMagicWand } from "react-icons/bi";
const AIIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer" onClick={onClick}>
      {/* <img src="/assets/ai-icon.svg" alt="AI" className="w-10 h-10" /> */}
      <BiSolidMagicWand size={40}/>
    </div>
  );
}; 

export default AIIcon;
