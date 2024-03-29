import { TechnologyAndRole } from '@api/interfaces'
import { useQuery } from '@tanstack/react-query'

export const useFetchRoles = () => {
  return useQuery<TechnologyAndRole[]>(['roles'], () => {
    return new Promise<TechnologyAndRole[]>((resolve) =>
      setTimeout(() => {
        resolve([
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer1',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer2',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer3',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer4',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer5',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer6',
            description: 'Some description'
          },
          {
            imageUrl: '/js.png',
            name: 'Fullstack developer7',
            description: 'Some description'
          }
        ])
      }, 4000)
    )
  })
}
