import Link from 'next/link'
import React from 'react'

const ProjectItem = ({
  title,
  description,
  github,
  language
}) => {
  return (
    <Link target='_blank' href={github}>
      <div className='border-2 p-4 rounded-lg border-amber bg-purple dark:bg-gray cursor-pointer'>
        <p className='text-white font-semibold'>{title}</p>
        <p className='text-gray-light font-medium'>{description}</p>
        <div>
          <span></span>
          <p className='text-amber font-semibold'>{language}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectItem