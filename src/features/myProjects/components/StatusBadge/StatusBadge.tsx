import { Badge } from '@mantine/core'
import { ProjectStatus } from '@features/myProjects/interfaces/ProjectStatus'

interface StatusBadgeProps {
  status: ProjectStatus
}
export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Badge size="sm" color={status.color}>
      {status.text}
    </Badge>
  )
}
