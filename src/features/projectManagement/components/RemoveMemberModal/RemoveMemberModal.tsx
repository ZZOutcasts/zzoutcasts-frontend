import { ModalManagement } from '@features/common/hooks/useModalManagement'
import { useRemoveProjectMember } from '@features/projectManagement/hooks/useRemoveProjectMember'
import { Avatar, Group, Modal, Text } from '@mantine/core'
import { ModalError } from '@features/projectManagement/components/ModalError'
import { ModalButton } from '@features/projectManagement/components/ModalButton'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'

export const RemoveMemberModal = ({
  isOpened,
  changeModalState
}: ModalManagement) => {
  const { mutate, reset, isLoading, isError } = useRemoveProjectMember()

  const { projectId } = useContext(ProjectIdContext)

  const handleClick = () => {
    mutate(
      { projectId, memberId: '1' },
      {
        onSuccess: async () => {
          changeModalState()
          reset()
        }
      }
    )
  }

  const handleClose = () => {
    changeModalState()
    reset()
  }

  const modalProps = {
    opened: isOpened,
    onClose: handleClose,
    title: 'Are you sure you want to remove this user?',
    size: 'lg'
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
      <Group>
        <Avatar radius="xl" />
        <Text weight="bold">Adameq</Text>
      </Group>

      <ModalButton isLoading={isLoading} color="red" onClick={handleClick}>
        Remove
      </ModalButton>
    </Modal>
  )
}
