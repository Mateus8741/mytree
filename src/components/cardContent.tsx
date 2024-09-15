import { Share, Trash2 } from 'lucide-react'
import { Switch } from './switch'

type CardContentProps = {
  nameContent: string
  url: string
  isChecked: boolean
}

export function CardContent({ nameContent, isChecked, url }: CardContentProps) {
  function handleShare() {
    console.log('Compartilhar')
  }

  function handleDelete() {
    console.log('Deletar')
  }

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <p className="font-bold">{nameContent}</p>
          <p className="font-light">{url}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Share
              className="size-6 text-gray-500 cursor-pointer hover:text-blue-500"
              onClick={handleShare}
            />
            <Switch checked={isChecked} />
          </div>

          <Trash2
            className="size-6 text-gray-500 cursor-pointer hover:text-red-500"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}
