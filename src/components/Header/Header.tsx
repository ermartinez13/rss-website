import { MouseEventHandler, useRef, useState } from 'react'
import { MobileContent } from './MobileContent'
import { MobileOverlay } from './MobileOverlay'

export function Header() {
  const [showOverlay, setShowOverlay] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowOverlay(!showOverlay)
    if (ref.current) {
      ref.current.style.height = showOverlay ? '0' : '100vh'
    }
  }

  return (
    <header className='relative z-50 bg-[#20084E]'>
      <MobileOverlay ref={ref} />
      <MobileContent showOverlay={showOverlay} handleClick={handleClick} />
    </header>
  )
}
