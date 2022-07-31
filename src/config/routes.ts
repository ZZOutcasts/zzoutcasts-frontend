export const routes = {
  projectsSearch: () => '/search',
  myProjects: () => '/projects',
  profile: () => '/profile',
  project: (id: string) => `/projects/${id}`,
  createProject: () => '/projects/create',
  login_demo: () => 'login-demo',
  register_demo: () => 'register-demo'
}
