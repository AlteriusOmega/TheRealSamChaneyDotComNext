import React, { ReactNode } from 'react'
import CodingNav from './CodingNav'

interface CodingLayoutProps {
  children?: ReactNode;
}

const CodingLayout = ({ children }: CodingLayoutProps) => {
  return (
    <div className="flex">
      <div>
        <CodingNav />
      </div>
      {/* <div className="overflow-y-auto max-h-[500px] scrollbar-hide">{children}</div> */}
      <div className=" h-auto">{children}</div>
    </div>
  )
}

export default CodingLayout