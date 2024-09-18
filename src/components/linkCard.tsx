import { FlameIcon } from 'lucide-react'
import Link from 'next/link'

interface LinkCardProps {
  link: string
}

export function LinkCard({ link }: LinkCardProps) {
  const href = `/MyLink/${link}`
  return (
    <div className="flex items-center bg-white p-4 gap-1 rounded-xl shadow-lg">
      <FlameIcon className="size-8 text-orange-500" />
      <h1 className="text-xl font-bold text-black">Seu My.Tree está no ar: </h1>
      <Link
        href={href}
        className="text-green-500 underline hover:text-green-700"
      >
        <span>my.tree/{link}</span>
      </Link>
    </div>
  )
}
