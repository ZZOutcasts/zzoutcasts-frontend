import { useQuery } from '@tanstack/react-query'

export const useProjectMembers = (projectId: string) => {
  return useQuery<any>(['projectMembers', projectId], () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              username: 'JSON CONNOR',
              roles: ['Fullstack developer', 'Epuap creator', 'ceo'],
              permission: 'Owner'
            },
            {
              username: 'Programista 30k',
              roles: ['Fullstack developer'],
              permission: 'Administrator'
            },
            {
              username: 'Kodsu',
              roles: ['Fullstack developer', 'Bicek workout enjoyer'],
              permission: 'Member'
            }
          ]),
        3000
      )
    })
  })
}
