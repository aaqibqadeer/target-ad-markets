import { MULTI_MARKET_DISCOUNT_COLUMNS_KEYS } from '@/constant'
import React from 'react'

interface Props {
  columnNames: string[]
  data: Record<string, any>[]
}

export const CustomTable: React.FC<Props> = ({ columnNames, data }) => {
  const alignment = [
    'text-left',
    'text-left',
    'text-left',
    'text-center',
    'text-center',
    'text-center',
    'text-center',
  ]
  const width = [
    'basis-1/3',
    'basis-1/6',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
  ]
  return (
    <div className='border-t-2 border-r-2 border-b-2 border-black py-2'>
      <div className='flex'>
        {columnNames.map((column, index) => {
          return (
            <div
              key={column}
              className={`flex-grow ${width[index]} ${alignment[index]}`}
            >
              {column}
            </div>
          )
        })}
      </div>

      <div className=''>
        {data?.length &&
          data?.map((row, index) => {
            return (
              <div key={row.organization + index} className='flex'>
                {MULTI_MARKET_DISCOUNT_COLUMNS_KEYS.map((key, colIndex) => (
                  <div
                    key={row[key] + colIndex}
                    className={`flex-grow ${width[colIndex]} ${alignment[colIndex]}`}
                  >
                    {row[key]}
                  </div>
                ))}
              </div>
            )
          })}
      </div>
    </div>
  )
}
