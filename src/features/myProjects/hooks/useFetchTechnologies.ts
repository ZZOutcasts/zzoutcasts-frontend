import { useQuery } from '@tanstack/react-query'

export interface TechnologyItem {
  value: string
  imageUrl?: string
}
export const useFetchTechnologies = () => {
  return useQuery<TechnologyItem[]>(['technologies'], (() => {
    return new Promise<TechnologyItem[]>((resolve) =>
      setTimeout(() => {
        resolve([
          { imageUrl: '/next.png', value: 'Next JS' },
          { imageUrl: '/next.png', value: 'Next JS' },
          { imageUrl: '/next.png', value: 'Next JS' },
          { imageUrl: '/next.png', value: 'Next JS' },
          { imageUrl: '/next.png', value: 'Next JS' },
          { imageUrl: '/next.png', value: 'Next JS' }
        ])
      }, 4000)
    )
  }) as unknown as () => Promise<TechnologyItem[]>)
}
