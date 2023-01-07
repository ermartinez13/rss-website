interface Props {
  height: number
  width: number
}

export function ThemeToggle({ height, width }: Props) {
  return (
    <svg
      fill='inherit'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-1.5v-17a8.5 8.5 0 010 17z' />
    </svg>
  )
}
