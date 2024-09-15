import { TreePalm } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex font-bold text-7xl">
      <span className="text-gray-900">My.</span>
      <span className="text-green-500">Tree</span>
      <TreePalm size={32} className="text-green-500" />
    </div>
  )
}
