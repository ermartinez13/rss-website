import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { Logo } from '../Logo'

interface Props {
  showOverlay: boolean
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export function MobileContent({ showOverlay, handleClick }: Props) {
  return (
    <div className='flex justify-between px-4 py-6 md:px-10 lg:hidden'>
      <Link href='/'>
        <span className='sr-only'>Rey Software Solutions</span>
        <span className='fill-white'>
          <Logo height={61} width={94} />
        </span>
      </Link>
      <button
        className='fill-white stroke-white w-10'
        type='button'
        onClick={handleClick}
      >
        {showOverlay ? <XIcon /> : <HamburgerIcon />}
      </button>
    </div>
  )
}

function HamburgerIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='inherit'>
      <path
        fillRule='evenodd'
        d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      stroke='inherit'
      viewBox='0 0 24 24'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
