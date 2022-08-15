import { useQuery } from '@tanstack/react-query'
import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'

export const useFetchMembersByUsername = (username: string) => {
  return useQuery<ApiMultiSelectItem[]>(
    ['members', username],
    () => {
      if (username === '') return []
      return new Promise<ApiMultiSelectItem[]>((resolve) => {
        setTimeout(
          () =>
            resolve(
              [
                { label: 'Adam', value: '4347883474', imageUrl: '/js.png' },
                { label: 'Adrian', value: '4343434474', imageUrl: '/js.png' },
                { label: 'Dominik', value: '4342222474', imageUrl: '/js.png' },
                { label: 'Anna', value: '4341232374', imageUrl: '/js.png' },
                { label: 'Anastazja', value: '4341333124', imageUrl: '/js.png' }
              ].filter(
                (x) =>
                  username.split('').filter((y, index) => x.label[index] === y)
                    .length === username.length
              )
            ),
          1000
        )
      })
    },
    {
      refetchOnWindowFocus: false,
      enabled: false
    }
  )
}
