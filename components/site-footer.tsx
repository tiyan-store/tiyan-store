import { CONTACT } from '@/lib/products'

function ContactLink({
  href,
  label,
  value,
}: {
  href: string
  label: string
  value: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3 transition-all hover:border-primary/60 hover:bg-primary/10"
    >
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-display text-sm font-semibold text-foreground">{value}</span>
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer id="kontak" className="border-t border-border bg-card/40 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-primary" />
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-foreground sm:text-2xl">
            Kontak & Komunitas
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Admin
            </p>
            <ContactLink
              href={`https://wa.me/62${CONTACT.wa1.replace(/^0/, '')}`}
              label="WhatsApp (Nope 1)"
              value={CONTACT.wa1}
            />
            <ContactLink
              href={`https://wa.me/62${CONTACT.wa2.replace(/^0/, '')}`}
              label="WhatsApp (Nope 2)"
              value={CONTACT.wa2}
            />
            <ContactLink href={CONTACT.telegram} label="Telegram" value={CONTACT.telegramLabel} />
          </div>

          <div className="space-y-3">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Komunitas
            </p>
            <ContactLink href={CONTACT.groupWa} label="Grup WhatsApp" value="TIYAN STORE" />
            <ContactLink href={CONTACT.channelWa} label="Saluran Testi" value="TIYAN STORE" />
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/30 p-5">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Info Pembayaran
          </p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            <p>
              QRIS a/n <span className="font-semibold text-foreground">{CONTACT.qrisName}</span>
            </p>
            <p>
              DANA{' '}
              <span className="font-semibold text-foreground">
                {CONTACT.danaNumber} (a/n {CONTACT.danaName})
              </span>
            </p>
            <p>
              Konfirmasi WA{' '}
              <span className="font-semibold text-foreground">{CONTACT.paymentWa}</span>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} TIYAN STORE. Semua transaksi diproses manual oleh admin.
        </p>
      </div>
    </footer>
  )
}
