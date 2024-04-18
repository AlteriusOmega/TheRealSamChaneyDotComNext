import React, { ReactNode } from 'react'
import CodingNav from './CodingNav'

interface CodingLayoutProps {
  children?: ReactNode;
}

const CodingLayout = ({ children }: CodingLayoutProps) => {
  return (
    <div className="flex">
      <CodingNav />
      <div className="overflow-auto max-h-[600px]">{children}</div>
    </div>
  )
}

export default CodingLayout