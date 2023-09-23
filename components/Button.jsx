import React from 'react';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
     <button
  className={`
    flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-[#1bfd9c] text-[#1bfd9c] border-[#1bfd9c]"
    } rounded-lg ${fullWidth && "w-full"} 
   
  `}
>

            {label}
            {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
        </button>
          
    )
};

export default Button;