import { z } from 'zod'

export const forgotUsernameSchema = z.object({
  email: z.string().email('Email inválido'),
})

export type ForgotUsernameSchema = z.infer<typeof forgotUsernameSchema>
