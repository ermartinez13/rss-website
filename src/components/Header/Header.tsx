import { useState } from 'react'
import { MobileContent } from './MobileContent'

export function Header() {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <header>
      <MobileContent />
    </header>
  )
}
