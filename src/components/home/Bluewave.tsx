"use client"
import React from 'react'

interface ProjectProps {
    linkParam: string;
  }

const Bluewave : React.FC<ProjectProps> =({linkParam}) => {
  return (
    <a href={linkParam} className='font-normal text-black no-underline'>Bluewave</a>
  )
}

export default Bluewave