/* eslint-disable prettier/prettier */
'use client'

import { AdjacentLinks } from '@/components/adjacentLinks'
import { Button } from '@/components/button'
import { FormTextInput } from '@/components/Form/formInput'
import {
  type ForgotPasswordSchema,
  forgotPasswordSchema,
} from '@/schema/forgotPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function ForgotPassword() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(forgotPasswordSchema),

    defaultValues: {
      email: '',
    },

    mode: 'onChange',
  })

  function onSubmit(data: ForgotPasswordSchema) {
    console.log(data)
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Esqueceu sua senha?</h2>
        <p className="mb-4">Insira seu email para redefinir a senha.</p>

        <form className="flex flex-col mt-8 w-96">
          <FormTextInput
            control={control}
            name="email"
            label="Email"
            placeholder="Digite seu e-mail"
          />

          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Enviar
          </Button>
        </form>

        <div className='flex items-center gap-1 place-content-center'>
          <AdjacentLinks 
            link='/'
            tittle='Voltar para o login'
          />

          <ArrowUpRight size={20} className='mt-8 text-green-600' />
        </div>
      </div>
    </main>
  )
}
