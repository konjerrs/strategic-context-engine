export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span>SYP × Strategic Context Engine</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-zinc-400">
          <span>Context rendered · Snapshot of June 2026</span>
          <span className="text-zinc-200">·</span>
          <span className="text-zinc-300">Prototype</span>
        </div>
      </div>
    </footer>
  )
}
