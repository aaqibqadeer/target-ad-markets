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
  const alignment = [
    'text-left',
    'text-left',
    'text-center',
    'text-center',
    'text-center',
  ]
  const width = [
    'basis-1/3',
    'basis-2/5 mr-4',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
  ]
  return (
    <div>
      <div className='flex font-semibold'>
        {headerNames.map((header, index) => {
          return (
            <div key={header} className={`${width[index]} ${alignment[index]}`}>
              {header}
            </div>
          )
        })}
      </div>
      <CustomTable columnNames={columnNames} data={data} />
    </div>
  )
}
