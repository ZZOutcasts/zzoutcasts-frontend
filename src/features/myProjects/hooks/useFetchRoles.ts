import { useQuery } from '@tanstack/react-query'

export interface RoleItem {
  value: string
  imageUrl?: string
}
export const useFetchRoles = () => {
  return useQuery<RoleItem[]>(['roles'], (() => {
    return new Promise<RoleItem[]>((resolve) =>
      setTimeout(() => {
        resolve([
          { imageUrl: '/js.png', value: 'Fullstack developer' },
          { imageUrl: '/js.png', value: 'Fullstack developer1' },
          { imageUrl: '/js.png', value: 'Fullstack developer2' },
          { imageUrl: '/js.png', value: 'Fullstack developer3' },
          { imageUrl: '/js.png', value: 'Fullstack developer4' },
          { imageUrl: '/js.png', value: 'Fullstack developer5' },
          { imageUrl: '/js.png', value: 'Fullstack developer6' },
          { imageUrl: '/js.png', value: 'Fullstack developer7' }
        ])
      }, 4000)
    )
  }) as unknown as () => Promise<RoleItem[]>)
}
