export function PhoneSkeleton() {
  return (
    <section className="w-[22rem] h-[45rem] my-auto mx-4 p-1.5 bg-white rounded-3xl flex items-center justify-center border-2">
      {/* Aqui você pode renderizar algo dentro do celular */}
      <div
        className="w-full h-full rounded-3xl"
        // style={{ boxShadow: '0 0 0 16px black' }}
      >
        {/* Conteúdo renderizado dentro do celular */}
        <iframe
          src="https://code-wave-lemon.vercel.app"
          className="w-full h-full rounded-3xl"
          title="CodeWave Digital Solutions"
        />
      </div>
    </section>
  )
}
