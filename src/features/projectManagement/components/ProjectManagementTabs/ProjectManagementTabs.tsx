import { Group, Tabs } from '@mantine/core'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BsPersonCircle } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { MembersTab } from '@features/projectManagement/components/MembersTab'
import { InvitationsTab } from '@features/projectManagement/components/InvitationsTab'
import { ReactNode } from 'react'

interface TabContainerProps {
  children: ReactNode
}

const TabContainer = ({ children }: TabContainerProps) => {
  return (
    <Group position="center">
      <div style={{ margin: 60, width: '100%' }}>{children}</div>
    </Group>
  )
}

export const ProjectManagementTabs = () => {
  return (
    <Tabs defaultValue="members" variant="pills">
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
        <TabContainer>
          <MembersTab />
        </TabContainer>
      </Tabs.Panel>

      <Tabs.Panel value="invitations" pt="xs">
        <TabContainer>
          <InvitationsTab />
        </TabContainer>
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
