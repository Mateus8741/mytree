'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface AdminProps {
  params: {
    username: string
  }
}

interface PreviewData {
  image: string
}

export default function MyLink({ params }: AdminProps) {
  const [previewData, setPreviewData] = useState<PreviewData | null>(null)
  const url = 'https://code-wave-lemon.vercel.app'
  const API_KEY = '253d822bdd44c18073f3c9a9096de150'

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch(
          `https://api.linkpreview.net/?key=${API_KEY}&q=${url}`,
        )
        const data = await response.json()
        setPreviewData(data)
      } catch (error) {
        console.error('Error fetching link preview:', error)
      }
    }

    fetchPreview()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <Image
        src="https://github.com/Mateus8741.png"
        alt={`${params.username}'s Profile Picture`}
        width={100}
        height={100}
        className="rounded-full"
      />

      {previewData && (
        <Image
          src={previewData.image}
          alt="Preview"
          width={600}
          height={400}
          layout="responsive"
        />
      )}

      <h1 className="text-3xl font-bold my-4 text-white">
        {params.username}&#39;s Links
      </h1>

      <h2 className="text-lg text-white text-center max-w-md my-4">
        Seja bem-vindo, {params.username}, especialistas em desenvolvimento de
        software! Aqui você pode encontrar todos os seus links.
      </h2>

      <div className="w-full max-w-md">
        {Array.from({ length: 10 }).map((_, index) => (
          <a
            key={index}
            href={`https://example.com/${params.username}/${index}`}
            className="block bg-white rounded-lg p-4 shadow-md mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {params.username}&#39;s Link {index}
          </a>
        ))}
      </div>
    </div>
  )
}
