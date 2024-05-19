import { createRouter, createWebHistory } from "vue-router";
import Skills from "@/views/Skills.vue";
import Experience from "@/views/Experince.vue";
import Education from "@/views/Education.vue";
import Resume from "@/views/resume.vue";
import MyContact from "@/views/mycontact.vue";
import Projects from "@/views/Projects.vue";
import AllComponents from "@/views/AllComponents.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component:AllComponents,
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills,
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/education",
    name: "education",
    component: Education,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/contact",
    name: "contact",
    component: MyContact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
