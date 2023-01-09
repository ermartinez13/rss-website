import Link from 'next/link'
import { Logo } from '../Logo'
import { ThemeToggle } from './ThemeToggle'

export function DesktopContent() {
  return (
    <div className='hidden lg:block  md:px-10 lg:max-w-[56.25rem] mx-auto'>
      <div className='flex py-6 justify-between items-center'>
        <Link href='/'>
          <span className='sr-only'>Rey Software Solutions</span>
          <span className='fill-white'>
            <Logo height={61} width={94} />
          </span>
        </Link>
        <div className='flex items-center'>
          <button className=' fill-white  text-center hover:opacity-50'>
            <ThemeToggle height={52} width={52} />
          </button>
          <nav>
            <ul className='flex'>
              <li>
                <Link
                  className='text-white text-center text-[1.75rem] hover:opacity-50'
                  href='#'
                >
                  Español
                </Link>
              </li>
              <li>
                <Link
                  className=' text-white text-center text-[1.75rem] hover:opacity-50'
                  href='#'
                >
                  Send Message
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
