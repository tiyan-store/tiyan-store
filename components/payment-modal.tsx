'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CONTACT, formatRupiah, type Product, type Variant } from '@/lib/products'
import { Button } from '@/components/ui/button'

type Selection = { product: Product; variant: Variant } | null

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/50 px-3 py-2">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate font-display text-base font-semibold tracking-wide text-foreground">{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-md border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
      >
        {copied ? 'Tersalin!' : 'Salin'}
      </button>
    </div>
  )
}

export function PaymentModal({ selection, onClose }: { selection: Selection; onClose: () => void }) {
  useEffect(() => {
    if (!selection) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selection, onClose])

  if (!selection) return null

  const { product, variant } = selection
  const priceText = formatRupiah(variant.price)

  const waMessage = encodeURIComponent(
    `Halo Admin TIYAN STORE, saya sudah/ingin membeli:\n\nProduk: ${product.name}\nPaket: ${variant.label}\nHarga: ${priceText}\n\nBerikut bukti pembayaran saya:`,
  )
  const waConfirmUrl = `https://wa.me/62${CONTACT.paymentWa.replace(/^0/, '')}?text=${waMessage}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Pembayaran"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Pembayaran</p>
            <h3 className="font-display text-lg font-bold leading-tight text-foreground">{product.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="rounded-full border border-border bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-5 p-5">
          {/* Order summary */}
          <div className="flex items-center justify-between rounded-xl border border-primary/40 bg-primary/10 px-4 py-3">
            <div>
              <p className="text-xs text-muted-foreground">Paket dipilih</p>
              <p className="font-display text-base font-semibold text-foreground">{variant.label}</p>
            </div>
            <p className="font-display text-2xl font-bold text-primary text-glow">{priceText}</p>
          </div>

          {/* QRIS */}
          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-center">
            <p className="mb-1 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Scan QRIS
            </p>
            <p className="mb-3 text-xs text-muted-foreground">
              a/n <span className="font-semibold text-foreground">{CONTACT.qrisName}</span>
            </p>
            <div className="mx-auto w-fit rounded-xl bg-white p-3">
              <Image
                src="/qris.jpg"
                alt={`Kode QRIS pembayaran atas nama ${CONTACT.qrisName}`}
                width={280}
                height={280}
                className="h-auto w-56"
              />
            </div>
          </div>

          {/* DANA */}
          <div className="space-y-2">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Atau Transfer DANA
            </p>
            <CopyRow label={`No. DANA (a/n ${CONTACT.danaName})`} value={CONTACT.danaNumber} />
          </div>

          {/* Confirmation */}
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-sm text-muted-foreground">
              Setelah bayar, kirim bukti pembayaran ke WhatsApp admin di bawah untuk konfirmasi pesanan.
            </p>
            <p className="mt-2 font-display text-lg font-bold text-foreground">
              WA: {CONTACT.paymentWa}
            </p>
            <Button asChild className="mt-3 w-full font-display text-base font-semibold tracking-wide">
              <a href={waConfirmUrl} target="_blank" rel="noopener noreferrer">
                Konfirmasi Pembayaran via WhatsApp
              </a>
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Pastikan nominal transfer sesuai. Pesanan diproses setelah pembayaran dikonfirmasi admin.
          </p>
        </div>
      </div>
    </div>
  )
}
