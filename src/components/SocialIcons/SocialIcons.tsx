import { SocialIcon } from 'react-social-icons'

export function SocialIcons() {
  return (
    <div className='px-4 py-2 w-full flex justify-center gap-x-[1.875rem]'>
      <SocialIcon
        url='https://www.linkedin.com/in/ermartinez13/'
        style={{ width: '39px', height: '39px' }}
        className='hover:opacity-50'
        target='_blank'
      />
      <SocialIcon
        url='https://github.com/ermartinez13'
        style={{ width: '39px', height: '39px' }}
        bgColor='#fff'
        className='hover:opacity-50'
        target='_blank'
      />
      <SocialIcon
        url='https://www.instagram.com/ermartinez13/'
        style={{ width: '39px', height: '39px' }}
        className='hover:opacity-50'
        target='_blank'
      />
    </div>
  )
}
