import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '@/views/LoginView.vue';

// patient
import DashBoard from '@/views/patient/DashBoard.vue';
import HomeView from '@/views/patient/HomeView.vue';
import SessionsView from '@/views/patient/SessionsView.vue';
import SessionsStepMeditation from '@/components/SessionsStepMeditation.vue';
import CalendarView from '@/views/patient/CalendarView.vue';
import NotesIntroVue from '@/views/patient/NotesIntro.vue';
import NotesView from '@/views/patient/NotesView.vue';
import NotesViewAdd1 from '@/views/patient/NotesViewAdd1.vue';
import NotesViewShow1 from '@/views/patient/NotesViewShow1.vue';
import HelpView from '@/views/patient/HelpView.vue';

//therapist
import DashBoardTherapist from '@/views/therapist/DashboardTherapist.vue';
import HomeViewTherapist from '@/views/therapist/HomeViewTherapist.vue';
import PatientsView from '@/views/therapist/PatientsView.vue';
import PatientsViewDetails from '@/views/therapist/PatientsViewDetails.vue';
import PatientsResultsView from '@/views/therapist/PatientsResultsView.vue';
import CoursesViewTherapist from '@/views/therapist/CoursesViewTherapist.vue';
import CoursesViewAddTherapist from '@/views/therapist/CoursesViewAddTherapist.vue';
import HelpViewTherapist from '@/views/therapist/HelpViewTherapist.vue';

//admin
import DashboardAdmin from '@/views/admin/DashboardAdmin.vue';
import HomeViewAdmin from '@/views/admin/HomeViewAdmin.vue';
import DetailViewAdmin from '@/views/admin/DetailViewAdmin.vue';

//debug
import DebugView from '@/views/DebugView.vue';
import DebugApiView from '@/views/DebugApiView.vue';

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
                name: 'Dashboard3a',
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
                component: SessionsStepMeditation,
                },
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
              component: PatientsView,
              },
              {
              path: 'dashboardtherapist3b/:data',
              name: 'DashboardTherapist3b',
              component: PatientsViewDetails,
              props: true,
              },
              {
                path: 'dashboardtherapist3c/:data',
                name: 'DashboardTherapist3c',
                component: PatientsResultsView,
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
        },
        { 
          path: '/', 
          name: "DashboardAdmin",
          component: DashboardAdmin,
          children: [
              {
              path: 'dashboardadmin1',
              name: 'DashboardAdmin1',
              component: HomeViewAdmin,
              },
              {
              path: 'dashboardadmin2/:data',
              name: 'DashboardAdmin2',
              component: DetailViewAdmin,
              props: true,
              },
            ],
            meta: {
                allowAnonymous: true,
            },
        },
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