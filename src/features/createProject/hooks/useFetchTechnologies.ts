import { useQuery } from '@tanstack/react-query'
import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'

export const useFetchTechnologies = () => {
  return useQuery<ApiMultiSelectItem[]>(['technologies'], (() => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          { imageUrl: '/js.png', value: 'Javascript' },
          { imageUrl: '/js.png', value: 'Javascript1' },
          { imageUrl: '/js.png', value: 'Javascript2' },
          { imageUrl: '/js.png', value: 'Javascript4' },
          { imageUrl: '/js.png', value: 'Javascript3' },
          { imageUrl: '/js.png', value: 'Javascript5' },
          { imageUrl: '/js.png', value: 'Javascript6' },
          { imageUrl: '/js.png', value: 'Javascript7' },
          { imageUrl: '/js.png', value: 'Javascript8' },
          { imageUrl: '/js.png', value: 'Javascript9' },
          { imageUrl: '/js.png', value: 'Javascript10' },
          { imageUrl: '/js.png', value: 'Javascript11' },
          { imageUrl: '/js.png', value: 'Javascript12' },
          { imageUrl: '/js.png', value: 'Javascript13' },
          { imageUrl: '/js.png', value: 'Javascript14' },
          { imageUrl: '/js.png', value: 'Javascript15' },
          { imageUrl: '/js.png', value: 'Javascript16' },
          { imageUrl: '/js.png', value: 'Javascript17' },
          { imageUrl: '/js.png', value: 'Javascript18' },
          { imageUrl: '/js.png', value: 'Javascript19' }
        ])
      }, 4000)
    )
  }) as unknown as () => Promise<ApiMultiSelectItem[]>)
}
