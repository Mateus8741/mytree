'use client'

import { Button } from '@/components/button'
import { FormTextInput } from '@/components/Form/formInput'
import { Logo } from '@/components/logo'
import { loginScheema, type LoginScheema } from '@/schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function LoginScreen() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginScheema),

    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onChange',
  })

  function onSubmit(data: LoginScheema) {
    console.log(data)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Logo />

      <div className="flex flex-col items-center gap-1 mt-8">
        <p className="text-4xl font-bold text-black">Bem vindo de volta!</p>
        <p className="text-gray-500">Faça login para continuar</p>
      </div>

      <form className="flex flex-col mt-8 w-96">
        <FormTextInput
          control={control}
          name="email"
          label="Email"
          placeholder="Digite seu e-mail"
        />

        <FormTextInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
        />

        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </form>
    </main>
  )
}
