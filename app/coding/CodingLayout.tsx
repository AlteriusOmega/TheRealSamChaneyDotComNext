import React, { ReactNode } from 'react'
import CodingNav from './CodingNav'

interface CodingLayoutProps {
  children?: ReactNode;
}

const CodingLayout = ({ children }: CodingLayoutProps) => {
  return (
    <div className="flex">
      <CodingNav />
      {/* <div className="overflow-y-auto max-h-[500px] scrollbar-hide">{children}</div> */}
      <div className="scrollbar-hide">{children}</div>
    </div>
  )
}

export default CodingLayout