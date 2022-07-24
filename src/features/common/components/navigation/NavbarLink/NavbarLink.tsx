import {
  Group,
  ThemeIcon,
  Text,
  UnstyledButton,
  useMantineTheme,
  MantineTheme
} from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'

interface INavbarItemProps {
  icon: ReactNode
  children: ReactNode
  color: keyof MantineTheme['colors']
  href: string
}

export const NavbarLink = ({
  icon,
  children,
  color,
  href
}: INavbarItemProps) => {
  const theme = useMantineTheme()

  return (
    <Link href={href} passHref>
      <UnstyledButton component="a">
        <Group
          p="xs"
          sx={{
            gap: 10,
            ':hover': {
              backgroundColor: theme.colors.gray[0],
              borderRadius: theme.radius.md,
              '& *': {
                fontWeight: 600
              }
            }
          }}
        >
          <ThemeIcon
            radius="md"
            variant="light"
            color={color}
            size="lg"
            sx={{ '& > *': { strokeWidth: 2.5 } }}
          >
            {icon}
          </ThemeIcon>
          <Text weight={500} size="md">
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </Link>
  )
}
