import { TechnologyAndRole } from '@api/types/TechnologyAndRole'
import { ProjectMember } from '@api/types/ProjectMember'

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
