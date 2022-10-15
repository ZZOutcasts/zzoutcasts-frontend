import { CreateProjectFormValues } from '@features/createProject/types'

export const mapCreateProjectFormValuesToCreateOrUpdateProject = (
  obj: CreateProjectFormValues
) => ({
  ...obj,
  technologyNames: obj.technologies.map((technology) => technology.value),
  roleNames: obj.roles.map((role) => role.value),
  memberIds: obj.members.map((member) => member.value)
})
