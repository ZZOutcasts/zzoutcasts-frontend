import { useMemo } from 'react'
import { UserProject } from '@features/myProjects/types'

export const useUserProjects = () => {
  const userData = useMemo<UserProject[]>(
    () => [
      {
        id: '1',
        name: 'Test project name',
        imageUrl: '/photo1.jpg',
        status: {
          text: 'IN PROGRESS',
          color: 'orange'
        }
      },
      {
        id: '2',
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        imageUrl: '/photo2.jpg',
        status: {
          text: 'FINISHED',
          color: 'green'
        }
      }
    ],
    []
  )

  return userData
}
