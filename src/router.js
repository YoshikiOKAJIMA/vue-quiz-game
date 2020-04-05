import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/components/HOME/Home.vue"
import Gacha from "@/components/Gacha.vue"
import Save from "@/components/Save.vue"
import Manual from "@/components/Manual.vue"
import Exploration from "@/components/EXPLORATION/Exploration.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: "/Home", component: Home },
    { path: "/Gacha", component: Gacha },
    { path: "/Save", component: Save },
    { path: "/Manual", component: Manual },
    { path: "/Exploration", component: Exploration }
  ]
})

export default router
