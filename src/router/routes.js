
const routes = [
  {
    path: '/',
    //component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/StartLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'blog', component: () => import('pages/BlogPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/LoginLayout.vue')
  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import('layouts/SignLayout.vue')
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children : [
      { path: '', component: () => import('pages/CursosPage.vue') },
      { path: 'tienda', component: () => import('pages/TiendaPage.vue') },
      { path: 'perfil', component: () => import('pages/PerfilPage.vue') },
      { path: 'blog', component: () => import('pages/BlogPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'contacto', component: () => import('pages/ContactoPage.vue') },
      { path: 'c-introduccion', component: () => import('layouts/CursoLayout.vue'),
          children: [
            { path: '', component: () => import('pages/ProgresoPage.vue') },
            { path: 'temario', component: () => import('pages/TemarioPage.vue') }
          ]    
      }
    ]
  },

  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
