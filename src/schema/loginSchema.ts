import { z } from 'zod'

export const loginScheema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type LoginScheema = z.infer<typeof loginScheema>
