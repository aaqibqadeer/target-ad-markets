import React from 'react'
import { CustomTable } from './CustomTable'

interface Props {
  headerNames: string[]
  columnNames: string[]
  data: Record<string, any>[]
  borderBottom?: boolean
  columnKeys: string[]
}

export const CurrentCustomerTable: React.FC<Props> = ({
  headerNames,
  columnNames,
  data,
  borderBottom,
  columnKeys,
}) => {
  const getDiscountLabel = (text: string) => {
    switch (text) {
      case '50%':
        return '-> 50% on Setup Fee'
      case '20%':
        return '-> 20% on Monthly Fee for 6 Months'
      case '30%':
        return '-> 30% on Monthly Fee for 12 Months'
      default:
        return text
    }
  }

  const alignment = [
    'md:text-left',
    'md:text-left',
    'md:text-center',
    'md:text-center',
    'md:text-center',
  ]
  const width = [
    'md:basis-1/3',
    'md:basis-2/5 mr-4',
    'md:basis-1/12',
    'md:basis-1/12',
    'md:basis-1/12',
  ]
  return (
    <div>
      <div className='flex flex-col font-medium xl:font-semibold xl:flex-row border-b-2 border-black xl:px-4 pb-2'>
        {headerNames.map((header, index) => {
          return (
            <div key={header} className={`${width[index]} ${alignment[index]}`}>
              <div className='hidden xl:block'>{header}</div>
              <div className='xl:hidden'>{getDiscountLabel(header)}</div>
            </div>
          )
        })}
      </div>
      <CustomTable
        columnNames={columnNames}
        data={data}
        borderBottom={borderBottom}
        columnKeys={columnKeys}
      />
    </div>
  )
}
