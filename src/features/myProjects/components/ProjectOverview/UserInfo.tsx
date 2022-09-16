import { createStyles, Avatar, Text, Group } from '@mantine/core'
import { FaAt } from 'react-icons/fa'

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5]
  }
}))

interface UserInfoIconsProps {
  avatar: string
  name: string
  email: string
}

export const UserInfo = ({ avatar, name, email }: UserInfoIconsProps) => {
  const { classes } = useStyles()
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={48} radius="md" />
        <div>
          <Text size="lg" weight={500}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <FaAt size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  )
}
