import React from 'react'

interface Props {
  children: React.ReactNode
}

const Card = ({
  children
}: Props) => {
  return (
    <div className='w-11/12 md:w-3/4 max-w-[44rem] h-fit m-4 bg-white rounded p-4 flex flex-col items-center mb-6'>
      {children}
    </div>
  )
}

export default Card