'use client'

import { useState } from 'react'
import { CATEGORIES, formatRupiah, type Product, type Variant } from '@/lib/products'
import { PaymentModal } from '@/components/payment-modal'

type Selection = { product: Product; variant: Variant } | null

function ProductCard({
  product,
  onBuy,
}: {
  product: Product
  onBuy: (product: Product, variant: Variant) => void
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/60 hover:glow-blue">
      <div className="flex items-start justify-between gap-3 border-b border-border p-4">
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold leading-tight text-foreground text-pretty">
            {product.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground text-pretty">{product.description}</p>
        </div>
        <span className="shrink-0 rounded-md border border-primary/40 bg-primary/10 px-2 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-primary">
          {product.tag}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {product.variants.map((variant) => (
          <button
            key={variant.label}
            type="button"
            onClick={() => onBuy(product, variant)}
            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/40 px-3 py-2 text-left transition-all hover:border-primary hover:bg-primary/10"
          >
            <span className="text-sm font-medium text-foreground">{variant.label}</span>
            <span className="shrink-0 font-display text-sm font-bold text-primary">
              {formatRupiah(variant.price)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function Store() {
  const [selection, setSelection] = useState<Selection>(null)

  return (
    <>
      <div className="space-y-14">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-primary" />
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-foreground sm:text-2xl">
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onBuy={(p, v) => setSelection({ product: p, variant: v })}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <PaymentModal selection={selection} onClose={() => setSelection(null)} />
    </>
  )
}
