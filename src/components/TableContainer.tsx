import React from 'react'
import { CurrentCustomerTable } from './CurrentCustomerTable'
import { CONSTANTS } from '@/constant'
import { FutureCustomerTable } from './FutureCustomerTable'

interface Props {
  currentCustomerData: Record<string, any>[]
  futureCustomerData: Record<string, any>[]
}

export const TableContainer: React.FC<Props> = ({
  currentCustomerData,
  futureCustomerData,
}) => {
  return (
    <div className='w-3/4'>
      <div className='flex text-2xl font-semibold py-4'>
        <h2 className='basis-1/3'>B2B Advertising Markets</h2>
        <h2>
          Ads to Real Estate Agents placed in their MLS or Association software
        </h2>
      </div>
      <div className='border-t-2 border-r-2 border-black py-4 border-b-2'>
        <CurrentCustomerTable
          headerNames={CONSTANTS.MULTI_MARKET_DISCOUNT_HEADER}
          columnNames={CONSTANTS.MULTI_MARKET_DISCOUNT_COLUMNS}
          data={currentCustomerData}
        />
        <FutureCustomerTable
          headerNames={['Coming Soon']}
          columnNames={CONSTANTS.MULTI_MARKET_DISCOUNT_COLUMNS}
          data={futureCustomerData}
          borderBottom={true}
        />
      </div>
    </div>
  )
}
