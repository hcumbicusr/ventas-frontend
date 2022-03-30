import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue';
import BoardUser from './views/BoardUser.vue';

import DashboardLayout from './layout/DashboardLayout.vue'
// Admin pages
import Overview from 'src/views/Overview.vue'
import UserProfile from 'src/views/UserProfile.vue'
import TableList from 'src/views/TableList.vue'
import Typography from 'src/views/Typography.vue'
import Icons from 'src/views/Icons.vue'
import Maps from 'src/views/Maps.vue'
import Notifications from 'src/views/Notifications.vue'
import Upgrade from 'src/views/Upgrade.vue'

// GeneralViews
import NotFound from './views/NotFoundPage.vue'

// Vue.use(Router);

// export const router = new Router({
//   mode: 'history',
  const routes = [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/admin/overview'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/user',
      name: 'user',
      component: BoardUser
    },
    // ------------
    {
      path: '/admin',
      component: DashboardLayout,
      redirect: '/admin/overview',
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview
        },
        {
          path: 'user',
          name: 'User',
          component: UserProfile
        },
        {
          path: 'table-list',
          name: 'Table List',
          component: TableList
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography
        },
        {
          path: 'icons',
          name: 'Icons',
          component: Icons
        },
        {
          path: 'maps',
          name: 'Maps',
          component: Maps
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications
        },
        {
          path: 'upgrade',
          name: 'Upgrade to PRO',
          component: Upgrade
        }
      ]
    },
    // ------------
    { path: '*', component: NotFound }
  ];
// });

export default routes;