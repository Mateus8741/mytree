'use client'

import { ASIDE_OPTIONS, AsideNav } from '@/components/asideNav'
import { usePathname } from 'next/navigation'

export function RenderAside({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const route = usePathname()

  const excludedRoutes = [
    '/',
    '/ForgotPassword',
    '/ForgotUsername',
    '/RegisterUser',
  ]

  const isAside = ASIDE_OPTIONS.some((option) => option.href !== route)

  if (!isAside || excludedRoutes.includes(route)) {
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
