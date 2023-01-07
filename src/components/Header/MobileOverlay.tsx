import Link from 'next/link'

export function MobileOverlay({ showOverlay }: { showOverlay: boolean }) {
  const height = showOverlay ? 'h-screen' : 'h-0'

  return (
    <div
      className={`fixed z-10 inset-0 w-screen ${height} bg-[#20084E] duration-500 lg:hidden overflow-y-hidden`}
    >
      <div className='relative top-1/4 flex flex-col items-center'>
        <nav className='w-full'>
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
      </div>
    </div>
  )
}
