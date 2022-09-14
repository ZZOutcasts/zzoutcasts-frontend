import { ModalManagement } from '@features/common/hooks/useModalManagement'
import {
  useChangeMemberPermission,
  useChangeMemberRoles,
  usePermissions
} from '@features/projectManagement/hooks'
import { useForm, zodResolver } from '@mantine/form'
import { z as zod } from 'zod'
import { Modal, Select } from '@mantine/core'
import { ModalError } from '@features/common/components/modalContent/ModalError'
import { ModalSubmitButton } from '@features/common/components/modalContent/ModalSubmitButton'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { Member } from '@features/projectManagement/types'
import { ModalMemberInfo } from '@features/common/components/modalContent/ModalMemberInfo'
import { showSuccessNotification } from '@features/common/utils'

interface ChangePermissionFormValues {
  permission: string
}

type ChangePermissionModalProps = ModalManagement & {
  member: Member
}

export const ChangePermissionModal = ({
  isOpened,
  changeModalState,
  member
}: ChangePermissionModalProps) => {
  const { projectId } = useContext(ProjectIdContext)
  const permissionsQuery = usePermissions()
  const { mutate, isLoading, isError, reset } = useChangeMemberPermission()

  const form = useForm<ChangePermissionFormValues>({
    initialValues: {
      permission: member.permission
    },
    validate: zodResolver(
      zod.object({
        permission: zod
          .string()
          .refine((permission) => permission !== member.permission, {
            message: 'Change permission before submitting'
          })
      })
    )
  })

  const handleClose = () => {
    changeModalState()
    form.reset()
    reset()
  }

  const handleSubmit = ({ permission }: ChangePermissionFormValues) => {
    mutate(
      { projectId, memberId: member.id, permission },
      {
        onSuccess: () => {
          handleClose()
          showSuccessNotification({
            title: 'Success!',
            message: `Updated permission for ${member.username}`
          })
        }
      }
    )
  }

  const modalProps = {
    opened: isOpened,
    onClose: handleClose,
    title: 'Choose permission for chosen member',
    size: 'xl'
  }

  if (isError) {
    return (
      <Modal {...modalProps}>
        <ModalError />
      </Modal>
    )
  }

  return (
    <Modal {...modalProps}>
      <ModalMemberInfo {...member} />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Select
          sx={{ padding: '20px 0 ' }}
          placeholder={
            permissionsQuery.isLoading ? 'Loading...' : 'Pick permission'
          }
          searchable
          disabled={
            isLoading || permissionsQuery.isLoading || permissionsQuery.isError
          }
          data={permissionsQuery.data || []}
          {...form.getInputProps('permission')}
          {...(permissionsQuery.isError
            ? { error: 'An error occurred. Try again later' }
            : {})}
        />
        <ModalSubmitButton
          isLoading={isLoading || permissionsQuery.isLoading}
          disabled={permissionsQuery.isError}
          color="green"
          type="submit"
        >
          Change
        </ModalSubmitButton>
      </form>
    </Modal>
  )
}
