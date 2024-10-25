import { Error } from '@/components/Error'
import { Spinner } from '@/components/Spinner'
import { TableContainer } from '@/components/TableContainer'
import { API_END_POINT, CONSTANTS } from '@/constant'
import { useTargetPricing } from '@/Hooks/useTargetPricing'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  const { data, fetchData, error, loading } = useTargetPricing(API_END_POINT)
  const b2bData = data?.['business-to-business']?.customers || {}
  const currentB2BData = b2bData?.['current'] || {}
  const futureB2BData = b2bData?.['coming-soon'] || {}
  const b2cData = data?.['business-to-consumer']?.customers || {}
  const currentB2CData = b2cData?.['current'] || {}
  const futureB2CData = b2cData?.['coming-soon'] || {}

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className='my-8 m-2 md:m-8 '>
      <div className='xl:w-11/12 mx-auto 2xl:w-10/12'>
        <div className='flex flex-col-reverse md:flex-row text-center justify-between'>
          <p>RE-Target Advertising Markets</p>
          <div className='flex justify-center'>
            <Image src='/logo.png' alt='logo' width={278} height={80} />
          </div>
        </div>

        {loading && <Spinner />}

        {!error && !loading && (
          <div>
            {b2bData && (
              <div>
                <TableContainer
                  currentCustomerData={currentB2BData}
                  futureCustomerData={futureB2BData}
                  currentCustomerHeading={
                    CONSTANTS.MULTI_MARKET_DISCOUNT_HEADER
                  }
                  currentCustomerColumns={
                    CONSTANTS.MULTI_MARKET_DISCOUNT_COLUMNS
                  }
                  currentColumnKeys={
                    CONSTANTS.MULTI_MARKET_DISCOUNT_COLUMNS_KEYS
                  }
                  futureCustomerHeading={['Coming Soon']}
                  futureCustomerColumns={
                    CONSTANTS.MULTI_MARKET_DISCOUNT_COLUMNS
                  }
                  futureColumnKeys={
                    CONSTANTS.MULTI_MARKET_DISCOUNT_COLUMNS_KEYS
                  }
                  heading1='B2B Advertising Markets'
                  heading2='Ads to Real Estate Agents placed in their MLS or Association software'
                  futureCustomerNotes={CONSTANTS.B2B_COMING_SOON_NOTES}
                />
              </div>
            )}

            {b2cData && (
              <div className='mt-8'>
                <TableContainer
                  currentCustomerData={currentB2CData}
                  futureCustomerData={futureB2CData}
                  currentCustomerColumns={CONSTANTS.B2C_COLUMNS}
                  currentColumnKeys={CONSTANTS.B2C_COLUMN_KEYS}
                  futureColumnKeys={[]}
                  heading1='B2C Advertising Markets'
                  heading2='Ads to Home Buyers placed in MLS consumer search portals'
                />
              </div>
            )}
          </div>
        )}

        {error && <Error errorMessage={error} />}
      </div>
    </main>
  )
}
