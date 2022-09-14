import { useQuery } from '@tanstack/react-query'
import { Member } from '@features/projectManagement/types/projectManagement'

export const useProjectMembers = (projectId: string) => {
  return useQuery<Member[]>(['projectMembers', projectId], () => {
    return new Promise<Member[]>((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              id: '1',
              username: 'JSON CONNOR',
              roles: [
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                },
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                }
              ],
              permission: 'Owner'
            },
            {
              id: '2',
              username: 'Programista 30k',
              roles: [
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                }
              ],
              permission: 'Administrator'
            },
            {
              id: '3',
              username: 'Kodsu',
              roles: [
                {
                  value: 'Javascript Developer',
                  imageUrl: '/js.png'
                }
              ],
              permission: 'Member'
            }
          ]),
        3000
      )
    })
  })
}
