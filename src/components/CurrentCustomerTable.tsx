import React from 'react'
import { CustomTable } from './CustomTable'

interface Props {
  headerNames: string[]
  columnNames: string[]
}

export const CurrentCustomerTable: React.FC<Props> = ({
  headerNames,
  columnNames,
}) => {
  return (
    <div>
      {headerNames.map((header) => {
        return <div>{header}</div>
      })}

      <CustomTable columnNames={columnNames} />
    </div>
  )
}
