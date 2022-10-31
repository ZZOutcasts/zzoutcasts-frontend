import { ProjectMember, TechnologyAndRole } from '@api/types'

export const mapTechnologyOrRoleToApiMultiSelectItem = (
  arr: TechnologyAndRole[]
) => {
  return arr.map((el) => ({ value: el.name, imageUrl: el.imageUrl }))
}

export const mapProjectMemberToApiMultiSelect = (arr: ProjectMember[]) =>
  arr.map((obj) => ({
    value: obj.id,
    label: obj.username,
    imageUrl: obj.avatarUrl
  }))
