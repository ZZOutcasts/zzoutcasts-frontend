import { TechnologyAndRole } from '@features/common/types/TechnologyAndRole'

export const mapTechnologyOrRoleToApiMultiSelectItem = (
  arr: TechnologyAndRole[]
) => {
  return arr.map((el) => ({ value: el.name, imageUrl: el.imageUrl }))
}
