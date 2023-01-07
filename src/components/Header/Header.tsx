import { MouseEventHandler, useState } from 'react'
import { MobileContent } from './MobileContent'
import { MobileOverlay } from './MobileOverlay'

export function Header() {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowOverlay((state) => !state)
  }

  return (
    <header className='relative bg-[#20084E]'>
      <MobileOverlay showOverlay={showOverlay} />
      <MobileContent showOverlay={showOverlay} handleClick={handleClick} />
    </header>
  )
}
