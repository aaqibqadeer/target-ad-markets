import { MULTI_MARKET_DISCOUNT_COLUMNS_KEYS } from '@/constant'
import React from 'react'

interface Props {
  columnNames: string[]
  data: Record<string, any>[]
  borderBottom?: boolean
  textStyle?: string
  nullValue?: string
}

export const CustomTable: React.FC<Props> = ({
  columnNames,
  data,
  borderBottom = false,
  textStyle,
  nullValue = 'N/A',
}) => {
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
    'basis-1/4',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
    'basis-1/12',
  ]
  return (
    <div>
      <div className='flex font-semibold'>
        {columnNames.map((column, index) => {
          return (
            <div
              key={column}
              className={`flex items-end ${width[index]} ${alignment[index]}`}
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
                    className={` ${width[colIndex]} ${alignment[colIndex]} ${
                      row[key] ? textStyle : ''
                    }`}
                  >
                    {row[key] ?? nullValue}
                  </div>
                ))}
              </div>
            )
          })}
      </div>
    </div>
  )
}
