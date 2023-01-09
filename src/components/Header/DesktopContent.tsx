import Link from 'next/link'
import { Logo } from '../Logo'
import { ThemeToggle } from './ThemeToggle'

export function DesktopContent() {
  return (
    <div className='hidden lg:block  md:px-10 lg:max-w-[64rem] xl:max-w-[75rem] 2xl:max-w-[80rem] mx-auto'>
      <div className='flex py-6 justify-between items-center'>
        <Link href='/'>
          <span className='sr-only'>Rey Software Solutions</span>
          <span className='fill-white'>
            <Logo height={61} width={94} />
          </span>
        </Link>
        <div className='flex items-center gap-x-8'>
          <button className='fill-white text-center hover:opacity-50'>
            <ThemeToggle height={52} width={52} />
          </button>
          <nav>
            <ul className='flex gap-x-8'>
              <li>
                <Link
                  className='text-white text-center text-[1.375rem] hover:opacity-50'
                  href='#'
                >
                  Español
                </Link>
              </li>
              <li>
                <Link
                  className='px-3 pt-2 pb-2.5 border-[3px] border-[#5CFFE4] rounded-[2rem] text-white text-center text-[1.375rem] hover:bg-[#5CFFE4] hover:text-[#20084E]'
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
