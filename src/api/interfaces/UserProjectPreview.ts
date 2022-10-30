import { ProjectStatus } from './ProjectStatus'

export interface UserProjectPreview {
  id: string
  name: string
  status: ProjectStatus
  imageUrl: string
}
