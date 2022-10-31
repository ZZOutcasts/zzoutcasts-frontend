import { Permission } from '@api/types/Permission'
import { TechnologyAndRole } from '@api/types/TechnologyAndRole'

export interface ProjectMember {
  id: string
  username: string
  avatarUrl: string
  roles: TechnologyAndRole[]
  permission: Permission
}
