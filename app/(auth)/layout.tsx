import React from 'react'

const AuthLayout = ({children }: {children: React.ReactNode}) => {
  return (
    <div className='bg-blue-400'>
      {children}
    </div>
  )
}

export default AuthLayout