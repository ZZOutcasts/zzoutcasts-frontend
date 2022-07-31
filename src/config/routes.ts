export const routes = {
  projectsSearch: () => '/search',
  myProjects: () => '/projects',
  profile: () => '/profile',
  myProject: (id: string) => `/projects/${id}`,
  createProject: () => '/projects/create'
}
