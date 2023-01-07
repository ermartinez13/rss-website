import Link from 'next/link'
import { SocialIcons } from '../SocialIcons'
import { ThemeToggle } from './ThemeToggle'

export function MobileOverlay({ showOverlay }: { showOverlay: boolean }) {
  const height = showOverlay ? 'h-screen' : 'h-0'
  const translate = showOverlay ? 'translate-y-0' : '-translate-y-16'

  return (
    <div
      className={`fixed z-10 inset-x-0 top-0 ${height} bg-[#20084E] duration-500 lg:hidden overflow-y-auto`}
    >
      <div
        className={`relative h-screen pl-[calc(100vw-100%)] pt-32 flex flex-col items-center justify-between ${translate} duration-500`}
      >
        <div className='w-full'>
          <nav>
            <ul className='space-y-8'>
              <li>
                <Link
                  className='block px-4 py-2 text-white text-center text-[1.75rem]'
                  href='#'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='block px-4 py-2 text-white text-center text-[1.75rem]'
                  href='#'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className='block px-4 py-2 text-white text-center text-[1.75rem]'
                  href='#'
                >
                  Español
                </Link>
              </li>
            </ul>
          </nav>
          <div className='w-full mt-8'>
            <button className='w-full fill-white px-4 py-2 text-center flex items-center justify-center'>
              <ThemeToggle height={52} width={52} />
            </button>
          </div>
        </div>
        <div className='w-full pb-12 mt-12'>
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}
