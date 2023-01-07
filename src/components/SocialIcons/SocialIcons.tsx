import { SocialIcon } from 'react-social-icons'

export function SocialIcons() {
  return (
    <div className='w-full flex justify-center gap-x-[1.875rem]'>
      <SocialIcon
        url='https://www.linkedin.com/in/ermartinez13/'
        style={{ width: '39px', height: '39px' }}
      />
      <SocialIcon
        url='https://github.com/ermartinez13'
        style={{ width: '39px', height: '39px' }}
        bgColor='#fff'
      />
      <SocialIcon
        url='https://www.instagram.com/ermartinez13/'
        style={{ width: '39px', height: '39px' }}
      />
    </div>
  )
}
