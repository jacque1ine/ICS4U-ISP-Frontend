import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }, 
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalendarView.vue')
  }, 
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }, 
  {
    path: '/patient/info',
    name: 'patient_info',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/Info.vue')
  }, 
  {
    path: '/patient/new',
    name: 'new_patient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/New.vue')

  },
  {
    path: '/patient/profile/:HCNumber',
    name: 'patientProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/Profile.vue')
  },
  {
    path: '/patient/details/:HCNumber',
    name: 'patientDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/Details.vue')
  },
  {
    path: '/visit-history/:HCNumber',
    name: 'visitHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitHistory.vue')
  },
  {
    path: '/lab-records',
    name: 'lab_records',
    component: () => import(/* webpackChunkName: "about" */ '../views/lab-records/Recent.vue')
  },
  {
    path: '/lab-records/create',
    name: 'create_lab_record',
    component: () => import(/* webpackChunkName: "about" */ '../views/lab-records/Create.vue')
  },
  {
    path: '/lab-records/edit/:id',
    name: 'edit_lab_record',
    component: () => import(/* webpackChunkName: "about" */ '../views/lab-records/Edit.vue')
  },
  {
    path: '/visit-reports',
    name: 'visit_reports',
    component: () => import(/* webpackChunkName: "about" */ '../views/visit-reports/All.vue')
  },
  {
    path: '/visit-reports/create',
    name: 'create_visit_report',
    component: () => import(/* webpackChunkName: "about" */ '../views/visit-reports/New.vue')
  },
  {
    path: '/visit-reports/view/:id',
    name: 'edit_lab_record',
    component: () => import(/* webpackChunkName: "about" */ '../views/visit-reports/View.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

