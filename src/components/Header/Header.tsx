import { MouseEventHandler, useState } from 'react'
import { MobileContent } from './MobileContent'

export function Header() {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowOverlay(!showOverlay)
  }

  return (
    <header>
      <MobileContent showOverlay={showOverlay} handleClick={handleClick} />
    </header>
  )
}
