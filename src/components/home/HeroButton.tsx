import React from 'react'

interface HeroProps {
    label: String
}

const HeroButton : React.FC<HeroProps> = ({label}) => {
  return (
    <button className='px-4 py-2 rounded-md bg-[#282870] text-white
         text-sm font-semibold tracking-wider flex items-center gap-3'>{label}
         <span className='px-1 text-sm text-center text-black bg-white rounded-full'>&gt;</span>
         </button>
  )
}

export default HeroButton