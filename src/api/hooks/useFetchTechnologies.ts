import { useQuery } from '@tanstack/react-query'
import { TechnologyAndRole } from '@api/interfaces'

export const useFetchTechnologies = () => {
  return useQuery<TechnologyAndRole[]>(['technologies'], () => {
    return new Promise<TechnologyAndRole[]>((resolve) =>
      setTimeout(() => {
        resolve([
          {
            imageUrl: '/js.png',
            name: 'TypeScript',
            description:
              'free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.'
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
