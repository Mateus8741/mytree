import { TreePalm } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex font-bold text-7xl text-green-600">
      <span className="text-gray-900">My.</span>
      <span>Tree</span>
      <TreePalm size={32} />
    </div>
  )
}
