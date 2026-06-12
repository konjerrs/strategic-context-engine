'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isForces = pathname.startsWith('/forces')
  const isSaved = pathname.startsWith('/saved')
  const isLens = pathname.startsWith('/lens')

  return (
    <header className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/forces" className="flex items-center hover:opacity-75 transition-opacity">
            <span className="text-[15px] font-bold tracking-[-0.02em] text-zinc-900 leading-none">SYP</span>
          </Link>
          <span className="text-zinc-200 select-none">|</span>
          <span className="text-sm text-zinc-400 tracking-tight">Forces at Play Forecaster™</span>
        </div>

        <nav className="flex items-center gap-7">
          <Link
            href="/forces"
            className={`text-[13px] transition-colors ${
              isForces ? 'text-zinc-900 font-medium' : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            Forces
          </Link>
          <Link
            href="/lens"
            className={`text-[13px] transition-colors ${
              isLens ? 'text-zinc-900 font-medium' : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            Apply a Lens
          </Link>
          <Link
            href="/saved"
            className={`text-[13px] transition-colors ${
              pathname.startsWith('/saved') ? 'text-zinc-900 font-medium' : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            Saved
          </Link>
          <span className="text-[10px] font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full tracking-wide ml-1">
            WIP · Prototype V0.1
          </span>
        </nav>
      </div>
    </header>
  )
}
