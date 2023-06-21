import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '@/views/LoginView.vue';
// patient
import DashBoard from '@/views/DashBoard.vue';
import HomeView from '@/views/HomeView.vue';
import SessionsView from '@/views/SessionsView.vue';
import CalendarView from '@/views/CalendarView.vue';
import NotesIntroVue from '@/views/NotesIntro.vue';
import NotesView from '@/views/NotesView.vue';
import NotesViewAdd1 from '@/views/NotesViewAdd1.vue';
import NotesViewShow1 from '@/views/NotesViewShow1.vue';
import HelpView from '@/views/HelpView.vue';
import HelpViewTherapist from '@/views/HelpViewTherapist.vue';
//therapist
import DashBoardTherapist from '@/views/DashboardTherapist.vue';
import HomeViewTherapist from '@/views/HomeViewTherapist.vue';
import PatientsViewTherapist from '@/views/PatientsViewTherapist.vue';
import PatientsViewAddTherapist from '@/views/PatientsViewAddTherapist.vue';
import CoursesViewTherapist from '@/views/CoursesViewTherapist.vue';
import CoursesViewAddTherapist from '@/views/CoursesViewAddTherapist.vue';

//debug
import DebugView from '@/views/DebugView.vue';
import DebugApiView from '@/views/DebugApiView.vue';
import DebugMeditationView from '@/views/DebugMeditationView.vue';

var router = {
  
    generateRoutes: function (app) {
      app.use(appRouter)
    }}
    
    const routes = [
        { 
            path: '/',
            name: "Login", 
            component: LoginView,
            meta: {
                allowAnonymous: true,
            },
        },
        { 
            path: '/', 
            name: "Dashboard",
            component: DashBoard,
            children: [
                {
                path: 'dashboard1',
                component: HomeView,
                },
                {
                path: 'dashboard2a/:data',
                name: 'Dashboard2a',
                component: SessionsView,
                props: true,
                },
                /*
                {
                path: 'dashboard2b',
                component: SessionsView2,
                },
                {
                path: 'dashboard2c',
                component: SessionsView3,
                },
                {
                path: 'dashboard2d',
                component: SessionsView4,
                },*/
                {
                path: 'dashboard3pre',
                name: 'Dashboard3Pre',
                component: NotesIntroVue,
                },
                {
                path: 'dashboard3',
                component: NotesView,
                },
                {
                path: 'dashboard3a',
                component: NotesViewAdd1,
                },
                {
                path: 'dashboard3b/:data',
                name: 'Dashboard3b',
                component: NotesViewShow1,
                props: true,
                },
                {
                path: 'dashboard4',
                component: CalendarView,
                },
                {
                path: 'help',
                component: HelpView,
                },
                {
                path: 'debug',
                component: DebugView,
                },
                {
                path: 'debug1',
                component: DebugApiView,
                },
                {
                path: 'debug2',
                component: DebugMeditationView,
                }
            ],
            meta: {
                allowAnonymous: true,
            },
        },
        { 
          path: '/', 
          name: "DashboardTherapist",
          component: DashBoardTherapist,
          children: [
              {
              path: 'dashboardtherapist1',
              component: HomeViewTherapist,
              },
              {
              path: 'dashboardtherapist3',
              component: PatientsViewTherapist,
              },
              {
              path: 'dashboardtherapist3b/:data',
              name: 'DashboardTherapist3b',
              component: PatientsViewAddTherapist,
              props: true,
              },
              {
              path: 'dashboardtherapist4',
              component: CoursesViewTherapist,
              },
              {
              path: 'dashboardtherapist4b/:data',
              name: 'DashboardTherapist4b',
              component: CoursesViewAddTherapist,
              props: true,
              },
              {
              path: 'helptherapist',
              component: HelpViewTherapist,
              },
            ],
            meta: {
                allowAnonymous: true,
            },
        }
    ]

    export const appRouter = createRouter({
      history: createWebHistory(),
      routes,
    })
  
    appRouter.beforeEach((to, from, next) => {
      try {
        if (!to.meta.allowAnonymous && !sessionStorage.getItem("access_token")) {
          next({
            path: '/',
            query: { redirect: to.fullPath },
          });
        } else {
          next();
        }
      } catch (error) {
        console.log('Navigation guard warning, when login redirection', error);
      }
    });
    
export default router;