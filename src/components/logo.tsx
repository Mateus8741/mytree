import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { TreePalm } from 'lucide-react'

const logoVariants = cva('flex items-center font-bold', {
  variants: {
    variant: {
      default: 'text-green-600',
    },
    size: {
      sm: 'text-4xl',
      md: 'text-7xl',
      lg: 'text-9xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

interface LogoProps extends VariantProps<typeof logoVariants> {}

export function Logo({ variant, size }: LogoProps) {
  return (
    <div className={cn(logoVariants({ variant, size }))}>
      <span className="text-gray-900">My.</span>
      <span>Tree</span>
      <TreePalm size={32} />
    </div>
  )
}
