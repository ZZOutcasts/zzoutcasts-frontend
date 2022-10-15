import { Permission } from '@api/interfaces/Permission'
import { TechnologyAndRole } from '@api/interfaces/TechnologyAndRole'

export interface ProjectMember {
  id: string
  username: string
  avatarUrl: string
  roles: TechnologyAndRole[]
  permission: Permission
}
