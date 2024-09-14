import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name?: string
  errorMessages?: string
}

const Input = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, type, errorMessages, label, name, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 mb-4">
        {label && (
          <label className="block text-xs font-bold uppercase" htmlFor={name}>
            {label}
          </label>
        )}

        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          id={name}
          name={name}
          {...props}
        />

        {errorMessages && (
          <span className="text-xs text-red-500">{errorMessages}</span>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
