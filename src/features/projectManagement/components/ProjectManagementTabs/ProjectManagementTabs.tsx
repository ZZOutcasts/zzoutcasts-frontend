import { Tabs } from '@mantine/core'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BsPersonCircle } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { MembersTab } from '@features/projectManagement/components/MembersTab'
import { InvitationsTab } from '@features/projectManagement/components/InvitationsTab'

export const ProjectManagementTabs = () => {
  return (
    <Tabs defaultValue="members">
      <Tabs.List>
        <Tabs.Tab value="members" icon={<BsPersonCircle size={14} />}>
          Members
        </Tabs.Tab>
        <Tabs.Tab value="invitations" icon={<AiOutlineMail size={14} />}>
          Invitations
        </Tabs.Tab>
        <Tabs.Tab
          value="join-requests"
          icon={<HiOutlineDocumentText size={14} />}
        >
          Join Requests
        </Tabs.Tab>
        <Tabs.Tab value="recruitments" icon={<MdWorkOutline size={14} />}>
          Recruitments
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="members" pt="xs">
        <MembersTab />
      </Tabs.Panel>

      <Tabs.Panel value="invitations" pt="xs">
        <InvitationsTab />
      </Tabs.Panel>

      <Tabs.Panel value="join-requests" pt="xs">
        Tu na razie jest ściernisko
      </Tabs.Panel>

      <Tabs.Panel value="recruitments" pt="xs">
        ale będzie san francisko
      </Tabs.Panel>
    </Tabs>
  )
}
