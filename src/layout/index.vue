<template>
  <a-layout class="layout-wrap">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      width="250"
      v-if="siderShow"
    >
      <Logo :collapsed="collapsed" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        theme="dark"
        mode="inline"
        @click="menuHandleClick"
      >
        <template v-for="item in navList">
          <a-menu-item v-if="!item.child" :key="item.path">
            <Icon :icon="item.meta.icon" />
            <span class="menu-item" v-if="!collapsed">{{
              item.meta.title
            }}</span>
          </a-menu-item>
          <a-sub-menu :key="item.path" v-else>
            <template #title>
              <Icon :icon="item.meta.icon" />
              <span class="menu-item" v-if="!collapsed">{{
                item.meta.title
              }}</span>
            </template>
            <a-menu-item :key="item.child.path">
              {{ item.child.meta.title }}
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <Header :collapsed="collapsed" @changeCollapsed="changeCollapsed" />
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Logo from './logo';
import Header from './header';
import Icon from '@/layout/icon';
import { useRoute, useRouter } from 'vue-router';

import routesList from '@/router/routes';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
import {
  defineComponent,
  ref,
  onBeforeMount,
  reactive,
  toRefs,
  watchEffect
} from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    Logo,
    Header,
    Icon
  },
  setup() {
    const router = useRouter();
    const { currentRoute } = useRouter();
    const state = reactive({
      navList: [],
      selectedKeys: [],
      openKeys: [],
      siderShow: false
    });
    let selectedKeys = ref(['1']);
    let collapsed = ref(false);
    const changeCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    const menuHandleClick = (e) => {
      console.log(e, 'eeeeee');
      router.replace({ path: e.key });
    };
    const renderSlider = () => {
      routesList.forEach((item, index) => {
        if (item.path === '/') {
          state.navList.push({
            path: '/' + item.children[0].path,
            meta: item.children[0].meta
          });
        } else {
          if (index !== 2)
            state.navList.push({
              path: item.path,
              meta: item.meta,
              child: {
                path: item.path + '/' + item.children[0].path,
                meta: item.children[0].meta
              }
            });
        }
      });
      state.siderShow = true;
    };
    onBeforeMount(() => {
      renderSlider();
    });
    watchEffect(() => {
      console.log(currentRoute);
      if (currentRoute.value.matched.length > 2) {
        state.selectedKeys = [currentRoute.value.matched[1].path];
      } else {
        state.selectedKeys = [currentRoute.value.path];
      }
      state.openKeys = [currentRoute.value.matched[0].path];
    });
    return {
      selectedKeys,
      collapsed,
      changeCollapsed,
      menuHandleClick,
      ...toRefs(state)
    };
  }
});
</script>
<style>
.ant-layout-content{
 margin: 10px;
 overflow: auto;
}
.layout-wrap {
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-menu-title-content {
  display: flex;
  align-items: center;
}
.menu-item {
  margin-left: 5px;
}
</style>