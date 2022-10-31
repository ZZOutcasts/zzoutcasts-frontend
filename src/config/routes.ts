export const routes = {
  home: () => '/',
  projectsSearch: () => '/search',
  myProjects: () => '/my-projects',
  profile: () => '/profile',
  project: (id: string) => `/projects/${id}`,
  createProject: () => '/projects/create',
  projectManagement: (id: string) => `/projects/${id}/management`
}
