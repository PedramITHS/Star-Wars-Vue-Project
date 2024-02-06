import { createRouter, createWebHashHistory } from 'vue-router'

import index from './views/index.vue'
import page2 from './views/page2.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
      {
        component: index,
        path: '/'
      },
    {
      component: page2,
      path: '/page2'
    }
  ]
})
