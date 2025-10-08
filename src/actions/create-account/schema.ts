import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório.'),
  email: z.email('Digite um e-mail válido.').min(1, 'E-mail obrigatório.'),
  password: z.string('Senha inválida').min(8, 'Senha muito fraca.')
})

export type CreateUserSchemaData = z.infer<typeof createUserSchema>
