import { render } from '@testing-library/react'
import { UserProjects } from '@features/myProjects/components/UserProjects/UserProjects'
import { useUserProjects } from '@features/myProjects/hooks/useUserProjects'
import { ProjectCard } from '@features/myProjects/components/ProjectCard'
import { CreateProjectCard } from '@features/myProjects/components/CreateProjectCard'
import { NoProjectsInfo } from '@features/myProjects/components/NoProjectsInfo'
import { UserProject } from '@features/myProjects/types/project'

jest.mock('@features/myProjects/hooks/useUserProjects')

describe('UserProjects', () => {
  describe('Data case - array with one project', () => {
    const testProjects = [
      {
        id: '1',
        name: 'Test project name',
        imageUrl: '/image.png',
        status: {
          text: 'IN PROGRESS',
          color: 'orange'
        }
      }
    ]
    beforeAll(() => {
      ;(useUserProjects as jest.Mock).mockImplementation(() => testProjects)
    })

    it('Should render all projects from given array', () => {
      render(<UserProjects />)

      const expectedCard = (
        <ProjectCard project={testProjects[0]} key={testProjects[0].id} />
      )

      expect(render(expectedCard).baseElement).toBeInTheDocument()
    })

    it('Should render CreateProjectCard When given projects array is not empty', () => {
      render(<UserProjects />)

      const expectedCard = <CreateProjectCard />

      expect(render(expectedCard).baseElement).toBeInTheDocument()
    })
  })

  describe('Data case - empty array', () => {
    const testProjects: UserProject[] = []

    beforeAll(() => {
      ;(useUserProjects as jest.Mock).mockImplementation(() => testProjects)
    })

    it('Should render NoProjectsInfo When given projects array is empty', () => {
      render(<UserProjects />)

      const expectedCard = <NoProjectsInfo />

      expect(render(expectedCard).baseElement).toBeInTheDocument()
    })
  })
})
