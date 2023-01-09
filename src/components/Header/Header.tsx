import { MouseEventHandler, useState } from 'react'
import { DesktopContent } from './DesktopContent'
import { MobileContent } from './MobileContent'
import { MobileOverlay } from './MobileOverlay'

export function Header() {
  const [showOverlay, setShowOverlay] = useState(false)

  const openClosedOverlay: MouseEventHandler<HTMLButtonElement> = () => {
    if (showOverlay === false) {
      setShowOverlay(true)
    }
  }

  const closeOpenedOverlay: MouseEventHandler<HTMLHeadingElement> = (e) => {
    if (showOverlay === true && e.target instanceof Element) {
      const tagName = e.target.tagName
      const excludedElements = ['DIV', 'UL']
      if (excludedElements.includes(tagName)) return
      setShowOverlay(false)
    }
  }

  return (
    <header className='relative ' onClick={closeOpenedOverlay}>
      <MobileOverlay showOverlay={showOverlay} />
      <DesktopContent />
      <MobileContent
        showOverlay={showOverlay}
        onButtonClick={openClosedOverlay}
      />
    </header>
  )
}
