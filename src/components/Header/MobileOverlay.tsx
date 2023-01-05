import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const MobileOverlay = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      className='fixed z-25 inset-0 w-screen h-0 bg-[#20084E] duration-500 lg:hidden'
      ref={ref}
    ></div>
  )
})
