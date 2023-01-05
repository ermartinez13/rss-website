import { MouseEventHandler, useState } from 'react'
import { MobileContent } from './MobileContent'
import { MobileOverlay } from './MobileOverlay'

export function Header() {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowOverlay(!showOverlay)
  }

  return (
    <header className='relative z-50 bg-[#20084E]'>
      <MobileOverlay />
      <MobileContent showOverlay={showOverlay} handleClick={handleClick} />
    </header>
  )
}
