import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Text from "../views/Text.vue";
import Image from "../views/Image.vue";
import Audio from "../views/Audio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/text",
    name: "text",
    component: Text
  },
  {
    path: "/image",
    name: "image",
    component: Image
  },
  {
    path: "/audio",
    name: "audio",
    component: Audio
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
