import { useQuery } from '@tanstack/react-query'

export const usePermissions = () =>
  useQuery<string[]>(['permissions'], () => {
    return new Promise<string[]>((resolve, reject) =>
      setTimeout<string[]>(() => {
        resolve(['Administrator', 'Owner', 'Member'])
      }, 8000)
    )
  })

// TODO: add Permission type
