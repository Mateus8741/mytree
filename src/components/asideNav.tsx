import { BarChart2, Link as LinkIcon, Moon, Settings } from 'lucide-react'

import Link from 'next/link'
import { Logo } from './logo'

const ASIDE_OPTIONS = [
  { label: 'Links', href: '#', icon: LinkIcon },
  { label: 'Aparência', href: '#', icon: Moon },
  { label: 'Análise', href: '#', icon: BarChart2 },
  { label: 'Configurações', href: '#', icon: Settings },
]

export function AsideNav() {
  return (
    <aside className="w-64 text-green-600 py-4 h-full">
      <div className="flex items-center justify-center mb-5">
        <Logo size="sm" />
      </div>

      <nav>
        <ul className="flex flex-col p-4 space-y-4">
          {ASIDE_OPTIONS.map((option) => (
            <Link key={option.label} href={option.href}>
              <li className="flex items-center gap-2 py-2 rounded transition-colors duration-300 border-l-4 border-l-transparent hover:bg-green-100 hover:border-l-green-600 hover:border-l-4">
                {option.icon && (
                  <option.icon className="inline ml-2" size={20} />
                )}

                {option.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
