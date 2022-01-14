import Layout from "../layout";
export const routes = [
  {
    path: '/',
    name: '/',
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        meta: { title: "首页", icon: "home-wifi-fill" },
        component: () => import("@/views/Home")
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
