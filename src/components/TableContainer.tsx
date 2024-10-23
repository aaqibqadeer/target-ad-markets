import React from 'react'
import { CurrentCustomerTable } from './CurrentCustomerTable'
import { CONSTANTS } from '@/constant'
import { FutureCustomerTable } from './FutureCustomerTable'

interface Props {
  currentCustomerData: Record<string, any>[]
  currentCustomerHeading?: string[]
  currentCustomerColumns?: string[]
  currentColumnKeys: string[]
  futureCustomerData: Record<string, any>[]
  futureCustomerHeading?: string[]
  futureCustomerColumns?: string[]
  futureColumnKeys: string[]
  heading1?: string
  heading2?: string
  futureCustomerNotes?: string[]
}

export const TableContainer: React.FC<Props> = ({
  currentCustomerData,
  futureCustomerData,
  currentCustomerHeading = [],
  currentCustomerColumns = [],
  currentColumnKeys,
  futureCustomerHeading = [],
  futureCustomerColumns = [],
  futureColumnKeys,
  heading1,
  heading2,
  futureCustomerNotes,
}) => {
  return (
    <div className='w-3/4'>
      <div className='flex text-2xl font-semibold py-4'>
        <h2 className='basis-1/3'>{heading1}</h2>
        <h2>{heading2}</h2>
      </div>
      <div className='border-r-2 border-black py-4 border-b-2'>
        {currentCustomerData.length > 0 && (
          <CurrentCustomerTable
            headerNames={currentCustomerHeading}
            columnNames={currentCustomerColumns}
            data={currentCustomerData}
            columnKeys={currentColumnKeys}
          />
        )}
        {futureCustomerData.length > 0 && (
          <FutureCustomerTable
            headerNames={futureCustomerHeading}
            columnNames={futureCustomerColumns}
            data={futureCustomerData}
            borderBottom={true}
            columnKeys={futureColumnKeys}
            notes={futureCustomerNotes}
          />
        )}
      </div>
    </div>
  )
}
