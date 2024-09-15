import Link from 'next/link'

interface AdjacentLinksProps {
  link: string
  tittle: string
}

export function AdjacentLinks({ link, tittle }: AdjacentLinksProps) {
  return (
    <div className="flex items-center gap-1 mt-8">
      <Link
        href={link}
        passHref
        className="relative text-green-600 after:block after:absolute after:left-0 after-bottom-0 after:w-full after:h-[2px] after:bg-green-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        {tittle}
      </Link>
    </div>
  )
}
