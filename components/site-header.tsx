import Image from 'next/image'
import { CONTACT } from '@/lib/products'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-lg border border-primary/50 glow-blue sm:h-12 sm:w-12">
            <Image src="/logo.jpg" alt="Logo TIYAN STORE" fill className="object-cover" priority />
          </div>
          <div className="leading-none">
            <p className="font-display text-lg font-bold uppercase tracking-wider text-foreground text-glow sm:text-xl">
              TIYAN STORE
            </p>
            <p className="text-[11px] text-muted-foreground">Trusted Digital Store</p>
          </div>
        </div>

        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 font-display text-sm font-semibold tracking-wide text-primary transition-colors hover:bg-primary/20 sm:block"
        >
          Telegram Admin
        </a>
      </div>
    </header>
  )
}
