import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import AboutView from "../views/AboutView.vue";
import LinksView from "../views/LinksView.vue";
import InteractView from "../views/InteractView.vue";
import ProfileView from "../views/ProfileView.vue";
import SettingsView from "../views/SettingsView.vue";
import SignupView from "../views/SignupView.vue";
import SigninView from "../views/SigninView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/interact",
    name: "interact",
    component: InteractView,
  },
  {
    path: "/profile/",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/links",
    name: "links",
    component: LinksView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
