import { useForm, zodResolver } from '@mantine/form'
import { z as zod } from 'zod'
import { Modal, Select } from '@mantine/core'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { permissionsList } from '@features/projectManagement/utils'
import { useChangeMemberPermission } from '@api/hooks'
import { ModalManagement } from '@hooks'
import { showSuccessNotification } from '@utils'
import { ModalError } from '@components/modalContent/ModalError'
import { ModalMemberInfo } from '@components/modalContent/ModalMemberInfo'
import { ModalSubmitButton } from '@components/modalContent/ModalSubmitButton'
import { ProjectMember } from '@api/types'

interface ChangePermissionFormValues {
  permission: string
}

type ChangePermissionModalProps = ModalManagement & {
  member: ProjectMember
}

export const ChangePermissionModal = ({
  isOpened,
  changeModalState,
  member
}: ChangePermissionModalProps) => {
  const { projectId } = useContext(ProjectIdContext)
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
      { projectId, memberId: member.id, permissionName: permission },
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
          placeholder="Pick permission"
          searchable
          disabled={isLoading}
          data={permissionsList}
          {...form.getInputProps('permission')}
        />
        <ModalSubmitButton isLoading={isLoading} color="green" type="submit">
          Change
        </ModalSubmitButton>
      </form>
    </Modal>
  )
}
