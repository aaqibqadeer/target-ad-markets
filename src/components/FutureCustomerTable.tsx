import React from 'react'
import { CustomTable } from './CustomTable'

interface Props {
  headerNames: string[]
  columnNames: string[]
  data: Record<string, any>[]
  borderBottom?: boolean
  columnKeys: string[]
  notes?: string[]
}

export const FutureCustomerTable: React.FC<Props> = ({
  headerNames,
  columnNames,
  data,
  borderBottom,
  columnKeys,
  notes = [],
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
      <div className='flex font-semibold md:border-b-2 md:border-black mt-8 mb-4'>
        {headerNames.map((header, index) => {
          return (
            <div
              key={header}
              className={`${width[index]} ${alignment[index]} border-b-2 border-black`}
            >
              {header}
            </div>
          )
        })}
      </div>
      <CustomTable
        columnNames={columnNames}
        columnKeys={columnKeys}
        data={data}
        borderBottom={borderBottom}
        textStyle='italic'
        nullValue='TBD'
      />
      <div className='w-full md:w-1/3 my-4'>
        {notes?.length > 0 &&
          notes?.map((item) => (
            <div key={item} className='py-2'>
              {item}
            </div>
          ))}
      </div>
    </div>
  )
}
