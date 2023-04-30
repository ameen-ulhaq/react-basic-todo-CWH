import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  }
  return (
    <div className='bg-dark text-light py-3 mt-5' style={footerStyle}>
      <p className='text-center'>Copyright TodoList.com</p>
    </div>
  )
}
