import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContextComposer } from '@/components/ContextComposer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-0 sm:px-4">
        <ContextComposer />
      </main>
      <Footer />
    </div>
  )
}
