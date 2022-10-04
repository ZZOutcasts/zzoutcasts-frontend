export const routes = {
  projectsSearch: () => '/search',
  myProjects: () => '/projects',
  profile: () => '/profile',
  project: (id: string) => `/projects/${id}`,
  createProject: () => '/projects/create',
  loginDemo: () => 'loginDemo',
  registerDemo: () => 'registerDemo',
  forgotPasswordFormDemo: () => 'forgotPasswordFormDemo'
}
