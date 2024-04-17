import React, { ReactNode } from 'react'
import CodingNav from './CodingNav'

interface CodingLayoutProps {
  children?: ReactNode;
}

const CodingLayout = ({ children }: CodingLayoutProps) => {
  return (
    <div>
      <CodingNav />
      {children}
    </div>
  )
}

export default CodingLayout