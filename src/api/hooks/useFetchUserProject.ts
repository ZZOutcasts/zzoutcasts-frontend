import { useQuery } from '@tanstack/react-query'
import { Project } from '@api/types'

export const useFetchUserProject = (projectId: string) => {
  return useQuery<Project>(['project', projectId], async () => {
    return new Promise<Project>((resolve, reject) => {
      console.log(projectId)
      setTimeout(
        () =>
          resolve({
            id: 'someuuid',
            name: 'Projectly',
            avatarUrl: '/photo1.jpg',
            description: 'Project description',
            technologies: [
              {
                name: 'Javascript',
                description: 'Better than php',
                imageUrl: '/js.png'
              },
              {
                name: 'Javascript',
                description: 'Better than php',
                imageUrl: '/js.png'
              },
              {
                name: 'Javascript',
                description: 'Better than php',
                imageUrl: '/js.png'
              }
            ],
            roles: [
              {
                name: 'Next.js developer',
                description: 'Some description',
                imageUrl: '/next.png'
              }
            ],
            members: [
              {
                id: '1',
                username: 'Archuser',
                avatarUrl: '/avatar.png',
                roles: [
                  {
                    name: 'Next.js developer',
                    description: 'Some description',
                    imageUrl: '/next.png'
                  }
                ],
                permission: 'Member'
              }
            ],
            capacity: 5
          }),
        1000
      )
    })
  })
}
