import { createRouter, createWebHashHistory } from "vue-router";

import index from "./views/index.vue";
import quiz from "./views/quiz.vue";
import top from "./views/top.vue";
import exp from "./views/explore.vue";
import contact from "./views/contact.vue";
import stats from "./views/stats.vue";
// import quizz from "./views/quizezz.vue";
// import Music from "./views/Music.vue";
import newExplore from "./views/newExplore.vue";
import LogIn from "./views/LogIn.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: index,
      path: "/",
    },
    {
      component: quiz,
      path: "/Quiz",
    },
    {
      component: top,
      path: "/Top",
    },
    {
      component: exp,
      path: "/Exp",
    },
    {
      component: contact,
      path: "/Contact",
    },
    {
      component: stats,
      path: "/stats",
    },
    // {
    //   component: quizz,
    //   path: "/Thegame",
    // },

    // {
    //   component: Music,
    //   path: "/Music",
    // },

    {
      component: newExplore,
      path: "/newExplore",
    },

    {
      component: LogIn,
      path: "/LogIn",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return desired position
  },
});
