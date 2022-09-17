import { useQuery } from '@tanstack/react-query'
import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'

export const useFetchRoles = () => {
  return useQuery<ApiMultiSelectItem[]>(['roles'], (() => {
    return new Promise<ApiMultiSelectItem[]>((resolve) =>
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
  }) as unknown as () => Promise<ApiMultiSelectItem[]>)
}
