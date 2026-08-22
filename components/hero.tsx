import Image from 'next/image'
import { CONTACT } from '@/lib/products'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border grid-bg">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:py-16 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-primary">
            Open Order 24 Jam
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-wide text-foreground text-balance sm:text-5xl">
            TIYAN STORE
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Jasa Joki, APK Tools, Nokos, dan Bug Apps dengan harga termurah. Pilih produk, langsung bayar via
            QRIS atau DANA, lalu konfirmasi ke admin.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#joki"
              className="rounded-lg bg-primary px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] glow-blue"
            >
              Lihat Produk
            </a>
            <a
              href={CONTACT.groupWa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-secondary/60 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
            >
              Gabung Grup WA
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-primary/40 glow-blue">
            <Image
              src="/logo.jpg"
              alt="Maskot TIYAN STORE"
              width={640}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
