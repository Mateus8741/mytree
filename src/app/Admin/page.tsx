import { AsideNav } from '@/components/asideNav'

export default function Admin() {
  return (
    <main className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex items-center my-8 mx-2 rounded-3xl shadow-lg bg-white">
        <AsideNav />
      </div>

      {/* Main content */}
      <section className="flex-1 ml-2 p-8 bg-orange-200">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <p>Conteúdo da página...</p>
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
