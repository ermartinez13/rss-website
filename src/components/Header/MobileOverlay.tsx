export function MobileOverlay({ showOverlay }: { showOverlay: boolean }) {
  const height = showOverlay ? 'h-screen' : 'h-0'

  return (
    <div
      className={`fixed inset-0 w-screen ${height} bg-[#20084E] duration-500 lg:hidden overflow-y-hidden`}
    ></div>
  )
}
