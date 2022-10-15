import { Grid } from '@mantine/core'
import { useFetchTechnologies } from '@api/hooks'
import { TechnologyCard } from '@features/technologiesList/technologyCard'

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
