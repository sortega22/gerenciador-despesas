import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className='bg-purple-500 h-10 hover:bg-purple-400 text-white font-bold disabled:cursor-not-allowed disabled:bg-gray-200'>
      {children}    </button>
  )
}
