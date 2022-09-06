import { useFetchTechnologies } from '@features/createProject/hooks'
import { Grid } from '@mantine/core'
import { TechnologyCard } from './technologyCard/index'

export const TechnologiesList = () => {
  const { data = [], isLoading } = useFetchTechnologies()
  if (!isLoading) {
    return (
      <Grid justify="center" align="flex-start">
        {data.map((project) => (
          <Grid.Col span={4}>
            <TechnologyCard project={project} />
          </Grid.Col>
        ))}
      </Grid>
    )
  }
  return <p>Loading...</p>
}