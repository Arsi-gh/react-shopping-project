export default function Background({displayHandler}) {
  return (
    <div onClick={() => displayHandler(false)} className="w-screen h-screen bg-zinc-800 opacity-50 fixed top-0 left-0 z-30"></div>
  )
}
