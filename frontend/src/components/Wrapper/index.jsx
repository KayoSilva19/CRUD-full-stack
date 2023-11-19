export function Wrapper({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-zinc-100 px-8">
      {children}
    </div>
  )
}
