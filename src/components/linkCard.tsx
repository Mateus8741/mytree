import { FlameIcon } from 'lucide-react'

interface LinkCardProps {
  link: string
}

export function LinkCard({ link }: LinkCardProps) {
  return (
    <div className="flex items-center bg-green-100 p-4 gap-1 rounded-xl shadow-lg">
      <FlameIcon className="size-8 text-orange-500" />
      <h1 className="text-xl font-bold text-black">Seu My.Tree está no ar: </h1>
      <span className="text-green-500 underline">{link}</span>
    </div>
  )
}
