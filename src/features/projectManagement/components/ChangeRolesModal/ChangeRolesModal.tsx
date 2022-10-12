import { useForm, zodResolver } from '@mantine/form'
import { z as zod } from 'zod'
import { Modal } from '@mantine/core'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { ApiMultiSelectItem } from '@types/ApiMultiSelect'
import { ModalManagement } from '@hooks/useModalManagement'
import { useChangeMemberRoles, useFetchRoles } from '@api/hooks'
import { mapTechnologyOrRoleToApiMultiSelectItem } from '@utils/ApiMultiSelect'
import { showSuccessNotification } from '@utils'
import { ModalError } from '@components/modalContent/ModalError'
import { ModalMemberInfo } from '@components/modalContent/ModalMemberInfo'
import { ApiMultiSelect } from '@components/customInputs/ApiMultiSelect'
import { ModalSubmitButton } from '@components/modalContent/ModalSubmitButton'
import { ProjectMember } from '@api/interfaces'

interface ChangeRolesFormValues {
  roles: ApiMultiSelectItem[]
}

type ChangeRolesModalProps = ModalManagement & {
  member: ProjectMember
}

export const ChangeRolesModal = ({
  isOpened,
  changeModalState,
  member
}: ChangeRolesModalProps) => {
  const { projectId } = useContext(ProjectIdContext)

  const { mutate, isLoading, isError, reset } = useChangeMemberRoles()

  const { data: rolesQueryData, ...rolesQueryProps } = useFetchRoles()
  const rolesQuery = {
    ...rolesQueryProps,
    data:
      rolesQueryData && mapTechnologyOrRoleToApiMultiSelectItem(rolesQueryData)
  }

  const form = useForm<ChangeRolesFormValues>({
    initialValues: {
      roles: mapTechnologyOrRoleToApiMultiSelectItem(member.roles)
    },
    validate: zodResolver(
      zod.object({
        roles: zod
          .array(zod.any())
          .min(1, { message: 'You must choose at least 1 role' })
      }) // TODO: add validation whether roles were changed
    )
  })

  const handleClose = () => {
    changeModalState()
    form.reset()
    reset()
  }

  const handleSubmit = ({ roles }: ChangeRolesFormValues) => {
    mutate(
      {
        projectId,
        memberId: member.id,
        roleNames: roles.map((role) => role.value)
      },
      {
        onSuccess: () => {
          handleClose()
          showSuccessNotification({
            title: 'Success!',
            message: `Updated roles for ${member.username}`
          })
        }
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
          query={rolesQuery}
          {...form.getInputProps('roles')}
        />
        <ModalSubmitButton
          isLoading={isLoading || rolesQuery.isLoading}
          disabled={rolesQuery.isError}
          color="green"
          type="submit"
        >
          Change
        </ModalSubmitButton>
      </form>
    </Modal>
  )
}
