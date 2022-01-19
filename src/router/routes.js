import Layout from "../layout";
export default [
  {
    path: '/',
    name: '/',
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        meta: { title: "首页", icon: "home-wifi-line" },
        component: () => import("@/views/Home")
      }
    ]
  },
  {
    path: '/modules',
    name: 'modules',
    meta: { title: "微社区", icon: "layout-top-line" },
    component: Layout,
    redirect:"/modules/manage",
    children:[{
      path:"manage",
      name:"manage",
      redirect:"/modules/manage/create",
      meta:{title:"模版管理"},
      component: () => import("@/views/dashboard/modules"),
      children:[
        {
          path:"create",
          name:"create",
          meta:{title:"创建模版"},
          component: () => import("@/views/dashboard/modules/create")
        },
        {
          path:"config",
          name:"config",
          meta:{title:"配置模版"},
          component: () => import("@/views/dashboard/modules/config")
        }
      ]
    }
  ]
  },
  {
    path:'/weweb',
    name:'weweb',
    component: () => import("@/views/Weweb")
  }
]
