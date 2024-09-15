'use client'

import { AsideNav } from '@/components/asideNav'
import { usePathname } from 'next/navigation'

export function RenderAside({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const route = usePathname()

  if (route !== '/Admin') {
    return <>{children}</>
  }

  return (
    <div className="grid grid-cols-[16rem,1fr] h-screen">
      <div className="flex items-center my-8 mx-2 rounded-3xl shadow-lg bg-white">
        <AsideNav />
      </div>

      <main className="overflow-y-auto">{children}</main>
    </div>
  )
}
