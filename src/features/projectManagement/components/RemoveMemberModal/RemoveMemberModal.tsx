import { ModalManagement } from '@features/common/hooks/useModalManagement'
import { useRemoveProjectMember } from '@features/projectManagement/hooks/useRemoveProjectMember'
import { Modal } from '@mantine/core'
import { ModalError } from '@features/common/components/modalContent/ModalError'
import { ModalSubmitButton } from '@features/common/components/modalContent/ModalSubmitButton'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { Member } from '@features/projectManagement/types'
import { ModalMemberInfo } from '@features/common/components/modalContent/ModalMemberInfo'
import { showSuccessNotification } from '@features/common/utils/showSuccessNotification'

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
          showSuccessNotification({
            title: 'Success!',
            message: `Successfully removed ${member.username} from project`
          })
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
