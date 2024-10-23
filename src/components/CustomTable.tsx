import React from 'react'

interface Props {
  columnNames: string[]
}

export const CustomTable: React.FC<Props> = ({ columnNames }) => {
  return (
    <div>
      {columnNames.map((column) => {
        return <div>{column}</div>
      })}
    </div>
  )
}
