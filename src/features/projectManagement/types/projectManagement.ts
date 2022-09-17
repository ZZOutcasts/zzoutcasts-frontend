import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'

export interface Member {
  id: string
  username: string
  roles: ApiMultiSelectItem[]
  permission: string
}
