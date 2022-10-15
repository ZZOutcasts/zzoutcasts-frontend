import { TechnologyAndRole } from '@api/interfaces/TechnologyAndRole'
import { ProjectMember } from '@api/interfaces/ProjectMember'

export interface Project {
  id: string
  name: string
  avatarUrl: string
  description: string
  technologies: TechnologyAndRole[]
  roles: TechnologyAndRole[]
  members: ProjectMember[]
  capacity: number
}
