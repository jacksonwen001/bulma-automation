import { getToken } from "@/utils/session";
import { createRouter, createWebHistory } from "vue-router";
import { staticUrl as routes } from "./url";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});


export default router;
