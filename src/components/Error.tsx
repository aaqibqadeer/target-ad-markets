import React from 'react'

interface Props {
  errorMessage: string
}

export const Error: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div>
      {errorMessage && (
        <div className='text-xl text-red-500 text-center my-16 py-16'>
          <div className='font-semibold'>Error:</div>
          <div>{errorMessage}</div>
        </div>
      )}
    </div>
  )
}
