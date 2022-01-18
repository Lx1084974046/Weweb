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
    path: '/modules',
    name: 'modules',
    meta: { title: "模版管理", icon: "home-wifi-fill" },
    component: Layout,
    children:[{
      path:"create",
      name:"create",
      meta:{title:"模版管理"},
      component: () => import("@/views/dashboard/modules/create")
    }
  ]
  },
  {
    path:'/weweb',
    name:'weweb',
    component: () => import("@/views/Weweb")
  }
]
