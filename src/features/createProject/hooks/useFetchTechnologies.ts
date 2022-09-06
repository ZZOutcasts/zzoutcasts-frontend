import { useQuery } from '@tanstack/react-query'
import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'

export const useFetchTechnologies = () => {
  return useQuery<ApiMultiSelectItem[]>(['technologies'], (() => {
    return new Promise((resolve) =>
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
  }) as unknown as () => Promise<ApiMultiSelectItem[]>)
}
