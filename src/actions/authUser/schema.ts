import { z } from 'zod'

export const authUserSchema = z.object({
  email: z.email('Digite um e-mail válido.').min(1, 'E-mail obrigatório.'),
  password: z.string('Senha inválida').min(8, 'Senha muito fraca.')
})

export type AuthUserSchemaData = z.infer<typeof authUserSchema>
