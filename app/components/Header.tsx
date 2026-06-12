export function Header() {
  return (
    <header className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-tight text-zinc-900">Field</span>
          <span className="text-zinc-200 select-none">|</span>
          <span className="text-sm text-zinc-400 tracking-tight">Strategic Context Engine</span>
        </div>
        <nav className="flex items-center gap-7">
          {['Forces', 'Library', 'Signals', 'Saved'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center ml-1">
            <span className="text-[10px] font-medium text-zinc-500 tracking-wide">JK</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
