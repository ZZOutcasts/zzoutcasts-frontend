import { useQuery } from '@tanstack/react-query'
import { TechnologyAndRole } from '@features/common/types/TechnologyAndRole'

export const useFetchTechnologies = () => {
  return useQuery<TechnologyAndRole[]>(['technologies'], () => {
    return new Promise<TechnologyAndRole[]>((resolve) =>
      setTimeout(() => {
        resolve([
          {
            imageUrl: '/js.png',
            name: 'Javascript',
            description: 'Description of JS'
          },
          {
            imageUrl: '/js.png',
            name: 'CSS',
            description: 'Description of CSS'
          },
          {
            imageUrl: '/js.png',
            name: 'HTML',
            description: 'Description of HTML'
          }
        ])
      }, 4000)
    )
  })
}
