"use client"
import React from 'react'

interface ProjectProps {
    linkParam: string;
  }

const Project : React.FC<ProjectProps> =({linkParam}) => {
  return (
    <a href={linkParam} className='font-normal text-black no-underline'>Project</a>
  )
}

export default Project