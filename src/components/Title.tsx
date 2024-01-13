import React from 'react'

interface Props {
  children?: React.ReactNode
}

const Title = ({
  children
}: Props) => {
  return (
    <div className='text-2xl'>
      {children}
    </div>
  )
}

export default Title