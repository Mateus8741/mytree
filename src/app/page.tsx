import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center p-12 bg-orange-400 sm:pb-12 lg:pb-12 xl:pb-12">
      <Image
        src="https://github.com/Mateus8741.png"
        alt="Mateus Tavares"
        width={120}
        height={120}
        className="rounded-full"
      />

      <h1>Mateus Tavares</h1>
    </main>
  )
}
