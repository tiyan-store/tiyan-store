import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Store } from '@/components/store'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Store />
      </div>
      <SiteFooter />
    </main>
  )
}
