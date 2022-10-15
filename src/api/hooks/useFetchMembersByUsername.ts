import { useQuery } from '@tanstack/react-query'
import { ProjectMember } from '@api/interfaces'

export const useFetchMembersByUsername = (username: string) => {
  return useQuery<ProjectMember[]>(
    ['members', username],
    () => {
      if (username === '') return []
      return new Promise<ProjectMember[]>((resolve) => {
        setTimeout(
          () =>
            resolve(
              [
                {
                  username: 'Adam',
                  id: '4347883474',
                  avatarUrl: '/js.png',
                  roles: [],
                  permission: 'Owner'
                },
                {
                  username: 'Adrian',
                  id: '4343434474',
                  avatarUrl: '/js.png',
                  roles: [],
                  permission: 'Owner'
                },
                {
                  username: 'Dominik',
                  id: '4342222474',
                  avatarUrl: '/js.png',
                  roles: [],
                  permission: 'Owner'
                },
                {
                  username: 'Anna',
                  id: '4341232374',
                  avatarUrl: '/js.png',
                  roles: [],
                  permission: 'Owner'
                },
                {
                  username: 'Anastazja',
                  id: '4341333124',
                  avatarUrl: '/js.png',
                  roles: [],
                  permission: 'Owner'
                }
              ].filter(
                (x) =>
                  username
                    .split('')
                    .filter((y, index) => x.username[index] === y).length ===
                  username.length
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
