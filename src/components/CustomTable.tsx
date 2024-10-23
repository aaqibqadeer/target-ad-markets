import { MULTI_MARKET_DISCOUNT_COLUMNS_KEYS } from '@/constant'
import { toTitleCase } from '@/util'
import React, { useEffect, useState } from 'react'

interface Props {
  columnNames: string[]
  data: Record<string, any>[]
  borderBottom?: boolean
  columnKeys: string[]
  textStyle?: string
  nullValue?: string
}

export const CustomTable: React.FC<Props> = ({
  columnNames,
  data,
  borderBottom = false,
  textStyle,
  nullValue = 'TBD',
  columnKeys = [],
}) => {
  const [notes, setNotes] = useState<string[]>([])

  const alignment = [
    'text-left',
    'text-left',
    'text-left',
    'text-center',
    'text-center',
    'text-center',
    'text-center',
    'text-left',
  ]
  const getWidth = () => {
    const [firstWidth, secondWidth] = data[0]['notes']
      ? ['basis-3/12', 'basis-[14%]']
      : ['basis-4/12', 'basis-1/4']
    return [
      firstWidth,
      secondWidth,
      'basis-1/12',
      'basis-1/12',
      'basis-1/12',
      'basis-1/12',
      'basis-1/12',
      'basis-[20%]',
    ]
  }
  const width = getWidth()

  // useEffect(() => {
  //   getNotes()
  // }, [])

  // const getNotes = () => {
  //   const tempNotes: string[] = []
  //   data?.forEach((row) => {
  //     if (row.notes) tempNotes.push(row.notes)
  //   })
  //   setNotes(tempNotes)
  // }

  return (
    <div className='flex lg:px-4'>
      <div className='basis-full'>
        <div className='hidden xl:flex font-semibold'>
          {columnKeys.map((column, index) => {
            return (
              <div
                key={column}
                className={`flex items-start ${width[index]} ${alignment[index]}`}
              >
                {toTitleCase(column, '-')}
              </div>
            )
          })}
        </div>

        <div className='hidden xl:block'>
          {data?.length &&
            data?.map((row, index) => {
              return (
                <div
                  key={row.organization + index}
                  className='flex flex-col md:flex-row'
                >
                  {columnKeys.map((key, colIndex) => (
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

        <div className='xl:hidden'>
          {data?.length &&
            data?.map((row, index) => {
              return (
                <div
                  key={row.organization + index}
                  className='flex flex-col py-4 even:bg-gray-50 odd:bg-white'
                >
                  {columnKeys.map((key, colIndex) => (
                    <div
                      key={row[key] + colIndex}
                      className={`flex justify-between ${width[colIndex]}
                      ${row[key] ? textStyle : ''}`}
                    >
                      <div className='text-left font-medium flex-1'>
                        {toTitleCase(key, '-')}
                      </div>
                      <div className='text-left flex-1'>
                        {row[key] ?? nullValue}
                      </div>
                    </div>
                  ))}
                </div>
              )
            })}
        </div>
      </div>

      {/* {notes?.length > 0 && (
        <div className='absolute right-4'>
          <div className='font-bold'>Notes</div>
          {notes.map((note, index) => (
            <div key={note + index}>{note}</div>
          ))}
        </div>
      )} */}
    </div>
  )
}
