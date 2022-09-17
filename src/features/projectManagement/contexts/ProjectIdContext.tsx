import { createContext, ReactNode } from 'react'

interface ProjectIdContextProps {
  projectId: string
}
export const ProjectIdContext = createContext<ProjectIdContextProps>(
  {} as ProjectIdContextProps
)

export const ProjectIdProvider = ({
  projectId,
  children
}: ProjectIdContextProps & { children: ReactNode }) => {
  return (
    <ProjectIdContext.Provider value={{ projectId }}>
      {children}
    </ProjectIdContext.Provider>
  )
} // TODO: add memo hook
