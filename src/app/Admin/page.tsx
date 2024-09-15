'use client'

import { Button } from '@/components/button'
import { CardContent } from '@/components/cardContent'
import { LinkCard } from '@/components/linkCard'
import { PlusIcon } from 'lucide-react'

export default function Admin() {
  function handleAddLink() {
    console.log('Adicionar link')
  }

  return (
    <main className="flex h-screen bg-gray-100">
      {/* Main content */}
      <section className="flex-1 ml-2 p-8">
        <LinkCard link="https://my.tree" />

        <Button
          className="w-full p-6 mt-8 text-white font-bold"
          onClick={handleAddLink}
        >
          <PlusIcon className="size-6 mr-2" />
          Adicionar link
        </Button>

        <CardContent
          nameContent="CodeWave Digital Solutions"
          url="https://code-wave-lemon.vercel.app"
          isChecked
        />
      </section>

      {/* Skeleton de um celular */}
      <section className="w-80 h-[500px] my-auto mx-4 p-4 bg-gray-200 rounded-3xl shadow-inner flex items-center justify-center">
        {/* Aqui você pode renderizar algo dentro do celular */}
        <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg">
          {/* Conteúdo renderizado dentro do celular */}
          <p className="text-center mt-20 text-gray-500">Conteúdo do celular</p>
        </div>
      </section>
    </main>
  )
}
