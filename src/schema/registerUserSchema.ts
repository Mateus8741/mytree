import { z } from 'zod'

export const registerUserSchema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha muito curta'),
})

export type RegisterUserSchema = z.infer<typeof registerUserSchema>
