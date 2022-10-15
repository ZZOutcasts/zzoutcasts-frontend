import { useModalManagement } from '@hooks/useModalManagement'
import { ActionIcon, Menu } from '@mantine/core'
import { BsCode, BsLock, BsThreeDots } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'
import { RemoveMemberModal } from '@features/projectManagement/components/RemoveMemberModal'
import { ChangeRolesModal } from '@features/projectManagement/components/ChangeRolesModal'
import { ChangePermissionModal } from '@features/projectManagement/components/ChangePermissionModal'
import { ProjectMember } from '@api/interfaces'

interface MemberActionButtonsProps {
  member: ProjectMember
}

export const MemberActionButtons = ({ member }: MemberActionButtonsProps) => {
  const removeModal = useModalManagement()
  const changeRolesModal = useModalManagement()
  const changePermissionModal = useModalManagement()

  return (
    <>
      <Menu position="bottom-end" offset={5} shadow="md" width={180}>
        <Menu.Target>
          <ActionIcon>
            <BsThreeDots size={16} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Management</Menu.Label>
          <Menu.Item
            icon={<BsCode />}
            onClick={changeRolesModal.changeModalState}
          >
            Change roles
          </Menu.Item>
          <Menu.Item
            icon={<BsLock />}
            onClick={changePermissionModal.changeModalState}
          >
            Change permission
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            color="red"
            icon={<FiTrash />}
            onClick={removeModal.changeModalState}
          >
            Remove member
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <RemoveMemberModal {...removeModal} member={member} />
      <ChangeRolesModal {...changeRolesModal} member={member} />
      <ChangePermissionModal {...changePermissionModal} member={member} />
    </>
  )
}
