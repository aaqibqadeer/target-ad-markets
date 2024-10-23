import React from 'react'
import { CurrentCustomerTable } from './CurrentCustomerTable'

export const TableContainer = () => {
  return (
    <div>
      <div>
        <h2>B2B Advertising Markets</h2>
        <h2>
          Ads to Real Estate Agents placed in their MLS or Association software
        </h2>
      </div>
      <CurrentCustomerTable
        headerNames={['A', 'B', 'C']}
        columnNames={['C1', 'C2', 'C3']}
      />
      {/* <FutureCustomerTable/> */}
    </div>
  )
}
