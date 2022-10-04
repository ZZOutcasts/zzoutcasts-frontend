import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  Divider,
  Stack
} from '@mantine/core'
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { ProjectItem, ProjectItemProps } from './ProjectItem'

export const SearchProjects = (props: TextInputProps) => {
  const theme = useMantineTheme()

  const projects: ProjectItemProps[] = [
    {
      projectId: '1',
      projectName: 'Projectly - znajdź dream-team do Twojego projektu!',
      projectOwner: 'Jan Kowalski',
      recruitments: ['losowy_string'],
      techStack: ['PHP', 'JS', 'Python']
    },
    {
      projectId: '2',
      projectName: 'Friendly - znajdź dream-team do Twojego projektu!',
      projectOwner: 'Jan Nowak',
      recruitments: [],
      techStack: ['HTML', 'CSS', 'JS']
    }
  ]

  return (
    <Stack spacing="lg">
      <TextInput
        icon={<IconSearch size={18} stroke={1.5} />}
        radius="xl"
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            {theme.dir === 'ltr' ? (
              <IconArrowRight size={18} stroke={1.5} />
            ) : (
              <IconArrowLeft size={18} stroke={1.5} />
            )}
          </ActionIcon>
        }
        placeholder="Search questions"
        rightSectionWidth={42}
        {...props}
      />
      <Divider />
      <Stack
        justify="flex-start"
        pt="1rem"
        sx={(sxTheme) => ({
          backgroundColor:
            sxTheme.colorScheme === 'dark'
              ? sxTheme.colors.dark[5]
              : sxTheme.colors.gray[2],
          height: 300
        })}
      >
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </Stack>
    </Stack>
  )
}
