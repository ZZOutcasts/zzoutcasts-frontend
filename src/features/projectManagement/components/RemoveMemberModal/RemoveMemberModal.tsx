import { useRemoveProjectMember } from '@api/hooks/useRemoveProjectMember'
import { Modal } from '@mantine/core'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { showSuccessNotification } from '@utils'
import { ModalSubmitButton } from '@components/modalContent/ModalSubmitButton'
import { ModalError } from '@components/modalContent/ModalError'
import { ModalMemberInfo } from '@components/modalContent/ModalMemberInfo'
import { ModalManagement } from '@hooks'
import { ProjectMember } from '@api/types'

type RemoveMemberModalProps = ModalManagement & {
  member: ProjectMember
}

export const RemoveMemberModal = ({
  isOpened,
  changeModalState,
  member
}: RemoveMemberModalProps) => {
  const { mutate, reset, isLoading, isError } = useRemoveProjectMember()

  const { projectId } = useContext(ProjectIdContext)

  const handleClose = () => {
    changeModalState()
    reset()
  }

  const handleClick = () => {
    mutate(
      { projectId, memberId: member.id },
      {
        onSuccess: async () => {
          handleClose()
          showSuccessNotification({
            title: 'Success!',
            message: `Successfully removed ${member.username} from project`
          })
        }
      }
    )
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
