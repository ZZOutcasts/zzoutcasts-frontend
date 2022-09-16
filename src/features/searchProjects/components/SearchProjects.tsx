import {
  Center,
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  Divider,
  Stack,
  Button
} from '@mantine/core'
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { ProjectItem } from './ProjectItem'

export const SearchProjects = (props: TextInputProps) => {
  const theme = useMantineTheme()

  return (
    <>
      <Stack spacing="lg">
        <TextInput
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="xl"
          size="md"
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
          pt={'1rem'}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2],
            height: 300
          })}
        >
          <ProjectItem projectId={1} projectName={'Projekt 1'} />
          <ProjectItem projectId={2} projectName={'Projekt 2'} />
          <ProjectItem projectId={3} projectName={'Projekt 3'} />
        </Stack>
      </Stack>
    </>
  )
}
