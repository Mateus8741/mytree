'use client'

import { Button } from '@/components/button'
import { DraggableContext, type DragProps } from '@/components/draggableContext'
import { LinkCard } from '@/components/linkCard'
import { PhoneSkeleton } from '@/components/phoneSkeleton'
import type { DropResult } from '@hello-pangea/dnd'
import { PlusIcon } from 'lucide-react'

export default function Admin() {
  function handleAddLink() {
    console.log('Adicionar link')
  }

  function reorder(
    list: DragProps['contentCardMap'],
    startIndex: number,
    endIndex: number,
  ) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  function handleDrag(data: DropResult) {
    if (!data.destination) return

    console.log(data.source.index)
    console.log(data.destination?.index)

    const reordered = reorder(
      CARD_CONTENT,
      data.source.index,
      data.destination.index,
    )

    console.log(reordered)
  }

  return (
    <main className="flex h-screen bg-gray-100">
      <section className="flex-1 ml-2 p-8">
        <LinkCard link="https://my.tree" />

        <Button
          className="w-full p-6 mt-8 text-white font-bold"
          onClick={handleAddLink}
        >
          <PlusIcon className="size-6 mr-2" />
          Adicionar link
        </Button>

        <DraggableContext
          onDragEnd={handleDrag}
          contentCardMap={CARD_CONTENT}
        />
      </section>

      {/* Skeleton de um celular */}
      <PhoneSkeleton />
    </main>
  )
}

const CARD_CONTENT = [
  {
    id: 0,
    nameContent: 'CodeWave Digital Solutions',
    url: 'https://my.tree',
    isChecked: true,
  },
  {
    id: 1,
    nameContent: 'Sei lá',
    url: 'https://my.tree',
    isChecked: true,
  },
  {
    id: 2,
    nameContent: 'Esse ai',
    url: 'https://my.tree',
    isChecked: true,
  },
  {
    id: 3,
    nameContent: 'POIs é',
    url: 'https://my.tree',
    isChecked: true,
  },
  {
    id: 4,
    nameContent: 'Aquele',
    url: 'https://my.tree',
    isChecked: true,
  },
]
