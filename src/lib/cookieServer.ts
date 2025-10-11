import { cookies } from 'next/headers'

export const getCookieServer = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  return token || null
}
