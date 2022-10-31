export interface CreateAndUpdateProject {
  name: string
  avatar?: File
  description: string
  technologyNames: string[]
  roleNames: string[]
  memberIds: string[]
  capacity: number
}
