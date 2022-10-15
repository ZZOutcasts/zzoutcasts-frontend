import { useQuery } from '@tanstack/react-query'
import { ProjectMember } from '@api/interfaces'

export const useFetchProjectMembers = (projectId: string) => {
  return useQuery<ProjectMember[]>(['projectMembers', projectId], () => {
    return new Promise<ProjectMember[]>((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              id: '1',
              username: 'JSON CONNOR',
              roles: [
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                },
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                }
              ],
              permission: 'Owner',
              avatarUrl: '/avatar.png'
            },
            {
              id: '2',
              username: 'Programista 30k',
              roles: [
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                }
              ],
              permission: 'Administrator',
              avatarUrl: '/avatar.png'
            },
            {
              id: '3',
              username: 'Kodsu',
              roles: [
                {
                  name: 'Javascript Developer',
                  description: 'Some description',
                  imageUrl: '/js.png'
                }
              ],
              permission: 'Member',
              avatarUrl: '/avatar.png'
            }
          ]),
        3000
      )
    })
  })
}
