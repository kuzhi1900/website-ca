const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'service-request', component: () => import('pages/ServiceRequest.vue') },
      { path: 'parts-request', component: () => import('pages/PartsRequest.vue') },
      { path: 'our-service', component: () => import('pages/OurService.vue') },
      { path: 'service-areas', component: () => import('pages/ServiceAreas.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
