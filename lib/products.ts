export type Variant = {
  label: string
  price: number // in rupiah, 0 = tanya admin
}

export type Product = {
  id: string
  name: string
  tag: string
  description: string
  variants: Variant[]
}

export type Category = {
  id: string
  title: string
  products: Product[]
}

export const CATEGORIES: Category[] = [
  {
    id: 'joki',
    title: 'Open Joki & Kebutuhan JB',
    products: [
      {
        id: 'open-joki',
        name: 'OPEN JOKI (Berbayar / Free)',
        tag: 'JOKI',
        description: 'Jasa joki dengan berbagai durasi, dari harian sampai permanen.',
        variants: [
          { label: '1 Hari', price: 100 },
          { label: '2 Hari', price: 200 },
          { label: '5 Hari', price: 500 },
          { label: '2 Minggu', price: 2000 },
          { label: '1 Bulan', price: 3000 },
          { label: 'Permanen Sampai Pensi JB', price: 5000 },
        ],
      },
      {
        id: 'kebutuhan-jb',
        name: 'Kebutuhan JB',
        tag: 'JB',
        description: 'Segala kebutuhan untuk joki / JB.',
        variants: [{ label: 'Paket Kebutuhan JB', price: 1000 }],
      },
    ],
  },
  {
    id: 'apk',
    title: 'APK Tools & Sosmed',
    products: [
      {
        id: 'suntik-sosmed',
        name: 'APK Suntik Sosmed',
        tag: 'SOSMED',
        description: 'Aplikasi untuk suntik sosial media.',
        variants: [{ label: 'Full Akses', price: 2000 }],
      },
      {
        id: 'qris-no-ktp',
        name: 'APK QRIS No KTP',
        tag: 'QRIS',
        description: 'Aplikasi pembuatan QRIS tanpa KTP.',
        variants: [{ label: 'Full Akses', price: 1000 }],
      },
      {
        id: 'auto-sv-roxy',
        name: 'APK Auto SV Kontak Roxy',
        tag: 'AUTO',
        description: 'Aplikasi auto save kontak Roxy.',
        variants: [{ label: 'Full Akses', price: 2000 }],
      },
      {
        id: 'hd-in-foto',
        name: 'APK HD In Foto (Permanen)',
        tag: 'HD FOTO',
        description: 'Aplikasi peningkat kualitas foto jadi HD, permanen.',
        variants: [{ label: 'Permanen', price: 1000 }],
      },
      {
        id: 'banned-unbanned',
        name: 'APK Banned & Unbanned',
        tag: 'TOOLS',
        description: 'Aplikasi banned & unbanned.',
        variants: [{ label: 'Full Akses', price: 2000 }],
      },
      {
        id: 'ps-permanen',
        name: 'APK PS Permanen',
        tag: 'TOOLS',
        description: 'Aplikasi PS permanen.',
        variants: [{ label: 'Permanen', price: 2000 }],
      },
      {
        id: 'badak-wa',
        name: 'APK Badak WA',
        tag: 'WA',
        description: 'Aplikasi Badak WA dengan pilihan lisensi.',
        variants: [
          { label: 'Reseller Permanen', price: 1000 },
          { label: 'Owner Permanen', price: 2000 },
        ],
      },
      {
        id: 'wa-iphone',
        name: 'APK WA iPhone',
        tag: 'WA',
        description: 'Aplikasi WA tampilan iPhone.',
        variants: [{ label: 'Full Akses', price: 2000 }],
      },
      {
        id: 'spam-otp',
        name: 'APK Spam OTP (Full Tutor)',
        tag: 'OTP',
        description: 'Aplikasi spam OTP lengkap dengan tutorial.',
        variants: [{ label: 'Full + Tutorial', price: 5000 }],
      },
      {
        id: 'web-nexus',
        name: 'Web All Tools Nexus',
        tag: 'WEB',
        description: 'Akses web semua tools Nexus.',
        variants: [{ label: 'Full Akses', price: 1000 }],
      },
      {
        id: 'bioskop',
        name: 'APK Bioskop No Iklan',
        tag: 'HIBURAN',
        description: 'Aplikasi nonton bioskop tanpa iklan.',
        variants: [{ label: 'Full Akses', price: 1000 }],
      },
    ],
  },
  {
    id: 'nokos',
    title: 'Nomor Kosong (Nokos)',
    products: [
      {
        id: 'nokos',
        name: 'Nokos (Nomor Kosong)',
        tag: 'NOKOS',
        description: 'Nomor kosong untuk berbagai platform.',
        variants: [
          { label: 'WhatsApp', price: 5000 },
          { label: 'Shopee', price: 3000 },
          { label: 'Telegram', price: 5000 },
          { label: 'Tokopedia', price: 3000 },
          { label: 'DLL (Tanya Admin)', price: 0 },
        ],
      },
    ],
  },
  {
    id: 'bug',
    title: 'APK Bug / Crasher',
    products: [
      {
        id: 'void-x-rat',
        name: 'APK Bug Crash Void X RAT',
        tag: 'BUG',
        description: 'Aplikasi bug crash Void X RAT dengan banyak tier lisensi.',
        variants: [
          { label: '1 Hari', price: 1000 },
          { label: '1 Bulan', price: 3000 },
          { label: 'Member Permanen', price: 5000 },
          { label: 'VIP Permanen', price: 8000 },
          { label: 'Reseller Permanen', price: 10000 },
          { label: 'Admin Permanen', price: 15000 },
          { label: 'Partner Permanen', price: 20000 },
          { label: 'Moderator Permanen', price: 25000 },
        ],
      },
      {
        id: 'rizzcrasher',
        name: 'APK Bug RizzCrasher',
        tag: 'BUG',
        description: 'Aplikasi bug RizzCrasher dengan banyak tier lisensi.',
        variants: [
          { label: '1 Hari', price: 500 },
          { label: '1 Bulan', price: 2000 },
          { label: 'Member Permanen', price: 3000 },
          { label: 'Reseller Permanen', price: 5000 },
          { label: 'VIP Permanen', price: 8000 },
          { label: 'Admin Permanen', price: 10000 },
          { label: 'Partner Permanen', price: 15000 },
          { label: 'Moderator Permanen', price: 20000 },
          { label: 'Owner Permanen', price: 25000 },
        ],
      },
      {
        id: 'manta-x',
        name: 'APK Bug Manta X',
        tag: 'BUG',
        description: 'Aplikasi bug Manta X dengan pilihan lisensi.',
        variants: [
          { label: '1 Hari', price: 5000 },
          { label: '1 Bulan', price: 40000 },
          { label: 'Full Update', price: 60000 },
          { label: 'Reseller', price: 80000 },
          { label: 'Partner', price: 100000 },
        ],
      },
    ],
  },
]

export const CONTACT = {
  wa1: '082330498105',
  wa2: '081353408933',
  telegram: 'https://t.me/TiyanStore17',
  telegramLabel: 't.me/TiyanStore17',
  groupWa: 'https://chat.whatsapp.com/BTRxK6b2xNX3hTbhzAckd5?s=cl&p=a&mlu=4',
  channelWa: 'https://whatsapp.com/channel/0029VbDE7C9I1rcoBr32GY3B',
  paymentWa: '081353408933',
  danaNumber: '082233408859',
  danaName: 'Tri',
  qrisName: 'Tiyan',
}

export function formatRupiah(n: number): string {
  if (n === 0) return 'Tanya Admin'
  return 'Rp ' + n.toLocaleString('id-ID')
}
