import { ApiMultiSelectItem } from '@features/common/types/ApiMultiSelect'
import { ModalManagement } from '@features/common/hooks/useModalManagement'
import { useFetchRoles } from '@features/createProject/hooks'
import { useChangeMemberRoles } from '@features/projectManagement/hooks'
import { useForm, zodResolver } from '@mantine/form'
import { z as zod } from 'zod'
import { Modal } from '@mantine/core'
import { ModalError } from '@features/projectManagement/components/ModalError'
import { ApiMultiSelect } from '@features/common/components/customInputs/ApiMultiSelect'
import { ModalSubmitButton } from '@features/projectManagement/components/ModalSubmitButton'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { Member } from '@features/projectManagement/types/projectManagement'
import { ModalMemberInfo } from '@features/projectManagement/components/ModalMemberInfo'

interface ChangeRolesFormValues {
  roles: ApiMultiSelectItem[]
}

type ChangeRolesModalProps = ModalManagement & {
  member: Member
}

export const ChangeRolesModal = ({
  isOpened,
  changeModalState,
  member
}: ChangeRolesModalProps) => {
  const { projectId } = useContext(ProjectIdContext)
  const query = useFetchRoles()
  const { mutate, isLoading, isError, reset } = useChangeMemberRoles()

  const form = useForm<ChangeRolesFormValues>({
    initialValues: {
      roles: member.roles
    },
    validate: zodResolver(
      zod.object({
        roles: zod
          .array(zod.any())
          .min(1, { message: 'You must choose at least 1 role' })
      })
    )
  })

  const handleClose = () => {
    changeModalState()
    form.reset()
    reset()
  }

  const handleSubmit = ({ roles }: ChangeRolesFormValues) => {
    mutate(
      { projectId, memberId: member.id, roles },
      {
        onSuccess: handleClose
      }
    )
  }

  const modalProps = {
    opened: isOpened,
    onClose: handleClose,
    title: 'Choose new role for chosen member',
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
        <ApiMultiSelect
          sx={{ padding: '20px 0 ' }}
          placeholder="Pick new role"
          searchable
          disabled={isLoading}
          nothingFound="No options"
          query={query}
          {...form.getInputProps('roles')}
        />
        <ModalSubmitButton isLoading={isLoading} color="green" type="submit">
          Change
        </ModalSubmitButton>
      </form>
    </Modal>
  )
}
