import { ProjectStatus } from '@features/myProjects/interfaces/ProjectStatus'

export interface UserProject {
  id: string
  name: string
  status: ProjectStatus
  imageUrl: string
}
