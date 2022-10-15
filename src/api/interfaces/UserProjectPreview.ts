import { ProjectStatus } from '@features/myProjects/types'

export interface UserProjectPreview {
  id: string
  name: string
  status: ProjectStatus
  imageUrl: string
}
