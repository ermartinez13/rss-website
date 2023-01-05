import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const MobileOverlay = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      className='fixed z-25 inset-0 w-screen h-screen bg-[#20084E]'
      ref={ref}
    ></div>
  )
})
