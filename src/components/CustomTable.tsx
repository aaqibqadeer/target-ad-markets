import { MULTI_MARKET_DISCOUNT_COLUMNS_KEYS } from '@/constant'
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

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = () => {
    const tempNotes: string[] = []
    data?.forEach((row) => {
      if (row.notes) tempNotes.push(row.notes)
    })
    setNotes(tempNotes)
  }

  return (
    <div className='flex '>
      <div className='basis-full'>
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
      </div>
      {notes?.length > 0 && (
        <div className='absolute right-4'>
          <div className='font-bold'>Notes</div>
          {notes.map((note, index) => (
            <div key={note + index}>{note}</div>
          ))}
        </div>
      )}
    </div>
  )
}
