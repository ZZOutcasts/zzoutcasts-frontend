import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { noAuthRoute } from '@features/auth/utils/noAuthRoute'

export const useHandleForbidden = (error?: AxiosError) => {
  const router = useRouter()

  if (!error) return

  const statusCodesMeaningForbidden = [401, 403]

  const statusCode = Number(error.status)

  const isForbidden = statusCodesMeaningForbidden.includes(statusCode)

  if (isForbidden) router.push(noAuthRoute())
}
