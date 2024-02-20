import { createRouter, createWebHashHistory } from "vue-router";

import index from "./views/index.vue";
import quiz from "./views/quiz.vue";
import top from "./views/top.vue";
import exp from "./views/explore.vue";
import contact from "./views/contact.vue";
import quizz from "./views/quizezz.vue";
import newExplore from './views/newExplore.vue'


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
      component: quizz,
      path: "/Thegame",
    },
  {

      component: newExplore,
      path: '/newExplore'
    }

  ]
})
