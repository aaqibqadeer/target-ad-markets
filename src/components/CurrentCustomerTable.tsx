import React from 'react'
import { CustomTable } from './CustomTable'

interface Props {
  headerNames: string[]
  columnNames: string[]
  data: Record<string, any>[]
}

export const CurrentCustomerTable: React.FC<Props> = ({
  headerNames,
  columnNames,
  data,
}) => {
  return (
    <div>
      <div className='flex'>
        {headerNames.map((header) => {
          return <div key={header}>{header}</div>
        })}
      </div>
      <CustomTable columnNames={columnNames} data={data} />
    </div>
  )
}
