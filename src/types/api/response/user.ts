export interface CreateUserApiResponse {
  id: string
  name: string
  email: string
  password: string
}

export interface AuthUserApiResponse {
  id: string
  name: string
  email: string
  token: string
}
