export interface ProjectStatus {
  text: string
  color: string
}

export interface UserProject {
  id: string
  name: string
  status: ProjectStatus
  imageUrl: string
}
