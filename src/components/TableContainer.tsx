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
    <div className='w-full'>
      <div className='flex flex-col lg:flex-row text-xl lg:text-2xl font-semibold py-6 lg:py-4 text-center lg:text-left justify-between xl:justify-start xl:px-4'>
        <h2 className='xl:basis-1/3 py-1 flex-1 xl:flex-none'>{heading1}</h2>
        <h2 className='py-1 flex-1 xl:flex-none'>{heading2}</h2>
      </div>
      <div className='border-black py-4 border-b-2 xl:border-l-2 xl:border-r-2 xl:py-0'>
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
