import { useMemo } from 'react'
import { UserProject } from '@features/myProjects/types/project'

export const useUserProjects = () => {
  const userData = useMemo<UserProject[]>(
    () => [
      {
        id: '1',
        name: 'Test project name',
        imageUrl: '/image.png',
        status: {
          text: 'IN PROGRESS',
          color: 'orange'
        }
      },
      {
        id: '2',
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        imageUrl: '/image.png',
        status: {
          text: 'FINISHED',
          color: 'green'
        }
      },
      {
        id: '1',
        name: 'Reallllly long name - really looong name',
        imageUrl: '/image.png',
        status: {
          text: 'PLANNED',
          color: 'violet'
        }
      },
      {
        id: '1',
        name: 'Test project name',
        imageUrl: '/image.png',
        status: {
          text: 'IN PROGRESS',
          color: 'orange'
        }
      },
      {
        id: '2',
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        imageUrl: '/image.png',
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
