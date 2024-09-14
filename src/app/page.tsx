import { Header } from '@/components/header'
import { Input } from '@/components/input'

export default function LoginScreen() {
  return (
    <main className="flex flex-col h-screen bg-white">
      <Header />
      <div className="p-12 justify-center items-center flex flex-col">
        <p className="text-4xl font-bold text-black">Bem vindo de volta!</p>
        <p className="text-gray-500">Faça login para continuar</p>

        <div className="flex flex-col mt-8 w-96">
          <Input
            label="E-mail"
            placeholder="Email"
            errorMessages="Formulário errado"
          />
          <Input
            label="Senha"
            placeholder="Senha"
            type="password"
            errorMessages="Senha incorreta"
          />
        </div>
      </div>
    </main>
  )
}
