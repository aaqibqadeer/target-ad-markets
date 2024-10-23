import { TableContainer } from '@/components/TableContainer'
import { API_END_POINT } from '@/constant'
import { useTargetPricing } from '@/Hooks/useTargetPricing'
import { useEffect } from 'react'

export default function Home() {
  const { data, loading, error, fetchData } = useTargetPricing(API_END_POINT)
  const customerData = data?.['business-to-business']?.customers || {}
  const futureCustomerData = customerData?.['coming-soon'] || {}
  const currentCustomers = customerData?.['current'] || {}
  console.log(currentCustomers)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className='m-8'>
      <div>
        <p>RE-Target Advertising Markets</p>
        {/* <img src='' alt='' /> */}
      </div>

      <TableContainer
        currentCustomerData={currentCustomers}
        futureCustomerData={futureCustomerData}
      />
    </main>
  )
}
