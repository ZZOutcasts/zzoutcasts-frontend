import { ModalManagement } from '@features/common/hooks/useModalManagement'
import { useRemoveProjectMember } from '@features/projectManagement/hooks/useRemoveProjectMember'
import { Modal } from '@mantine/core'
import { ModalError } from '@features/projectManagement/components/ModalError'
import { ModalSubmitButton } from '@features/projectManagement/components/ModalSubmitButton'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { Member } from '@features/projectManagement/types/projectManagement'
import { ModalMemberInfo } from '@features/projectManagement/components/ModalMemberInfo'

type RemoveMemberModalProps = ModalManagement & {
  member: Member
}

export const RemoveMemberModal = ({
  isOpened,
  changeModalState,
  member
}: RemoveMemberModalProps) => {
  const { mutate, reset, isLoading, isError } = useRemoveProjectMember()

  const { projectId } = useContext(ProjectIdContext)

  const handleClick = () => {
    mutate(
      { projectId, memberId: member.id },
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
      <ModalMemberInfo {...member} />
      <ModalSubmitButton
        isLoading={isLoading}
        color="red"
        onClick={handleClick}
      >
        Remove
      </ModalSubmitButton>
    </Modal>
  )
}
