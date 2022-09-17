import {
  ActionIcon,
  AppShell,
  Box,
  Divider,
  Group,
  Header,
  MantineTheme,
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
import { UserLink, UserLinkWhenNotAuthenticated } from '../UserLink'

interface NavbarItem {
  icon: ReactNode
  color: keyof MantineTheme['colors']
  href?: string
  text: string
}

interface LayoutProps {
  children: ReactNode
  navItems?: NavbarItem[]
}

const DefaultNavItems = () => (
  <>
    <NavbarLink
      icon={<TbSearch />}
      color="grape"
      href={routes.projectsSearch()}
    >
      Search projects
    </NavbarLink>
    <NavbarLink icon={<TbBrandTinder />} color="red" href={routes.myProjects()}>
      My projects
    </NavbarLink>
  </>
)

export const Layout = ({ children, navItems }: LayoutProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Box m="xs" sx={{ height: '100%' }}>
            {!navItems && <DefaultNavItems />}
            {navItems &&
              navItems.map((item) => (
                <NavbarLink
                  key={item.href}
                  color={item.color}
                  icon={item.icon}
                  href={item.href}
                >
                  {item.text}
                </NavbarLink>
              ))}
          </Box>
          <Divider />
          {/* <UserLink /> /!* TODO: add UserLinkWhenUnauth when unauthenticated *!/*/}
          <UserLinkWhenNotAuthenticated />
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
