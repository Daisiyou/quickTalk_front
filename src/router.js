import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      // component: Home
      component: () => import("./views/Home.vue")
    },
    {
      path: "/",
      name: "Login",
      // component: Home
      component: () => import("./views/Login.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

export default router;
