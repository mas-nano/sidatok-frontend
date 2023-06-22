import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/layouts/AuthLayout.vue"),
      children: [
        {
          path: "",
          name: "auth.login",
          component: () => import("../views/LoginView.vue")
        },
        {
          path: "register",
          name: "auth.register",
          component: () => import("../views/RegisterView.vue")
        },
        {
          path: "verify",
          name: "auth.verify",
          component: () => import("../views/VerifyEmailView.vue"),
          props: (route) => ({ query: route.query.token })
        }
      ]
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
