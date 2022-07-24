import {
  ActionIcon,
  AppShell,
  Box,
  Divider,
  Group,
  Header,
  Navbar,
  Text,
  ThemeIcon,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core'
import { ReactNode } from 'react'
import { GoProject } from 'react-icons/go'
import { TbSearch, TbBrandTinder, TbMoonStars } from 'react-icons/tb'
import { routes } from '@config/routes'
import { NavbarLink } from '../NavbarLink'
import { UserLink } from '../UserLink'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Box m="xs" sx={{ height: '100%' }}>
            <NavbarLink
              icon={<TbSearch />}
              color="grape"
              href={routes.projectsSearch()}
            >
              Search projects
            </NavbarLink>
            <NavbarLink
              icon={<TbBrandTinder />}
              color="red"
              href={routes.myProjects()}
            >
              My projects
            </NavbarLink>
          </Box>
          <Divider />
          <UserLink />
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Group
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              justifyContent: 'space-between'
            }}
            mx="sm"
          >
            <Group sx={{ display: 'flex', gap: 8 }}>
              <ThemeIcon>
                <GoProject />
              </ThemeIcon>
              <Text weight={600} size="lg">
                Projectly
              </Text>
            </Group>
            <ActionIcon
              size="lg"
              onClick={() => toggleColorScheme()}
              sx={{ fontSize: theme.fontSizes.xl }}
            >
              <TbMoonStars />
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={{
        main: {
          backgroundColor:
            colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1]
        }
      }}
    >
      <div style={{ minHeight: 'calc(100vh - 60px)' }}>{children}</div>
    </AppShell>
  )
}
