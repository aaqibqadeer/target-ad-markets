import React from 'react'
import { CustomTable } from './CustomTable'

interface Props {
  headerNames: string[]
  columnNames: string[]
  data: Record<string, any>[]
  borderBottom?: boolean
}

export const FutureCustomerTable: React.FC<Props> = ({
  headerNames,
  columnNames,
  data,
  borderBottom,
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
      <div className='flex font-semibold border-b-2 border-black mt-8 mb-4'>
        {headerNames.map((header, index) => {
          return (
            <div key={header} className={`${width[index]} ${alignment[index]}`}>
              {header}
            </div>
          )
        })}
      </div>
      <CustomTable
        columnNames={columnNames}
        data={data}
        borderBottom={borderBottom}
        textStyle='italic'
        nullValue='TBD'
      />
    </div>
  )
}
