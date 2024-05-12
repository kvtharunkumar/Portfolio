import { createRouter, createWebHistory } from "vue-router";
import header from "@/components/header.vue";
import About from "@/views/About.vue";
import Skills from "@/components/Skills.vue";
import Experince from "@/components/Experince.vue";
import Experince from "@/components/Experince.vue";
import Projects from "@/components/Projects.vue";
import resume from "@/components/resume.vue";
import mycontact from "@/components/mycontact.vue";
import form from "@/components/form.vue";
import Education from "@/components/Education.vue";
import Resume from "@/components/resume.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: About
      ,
    },
 
    {
      path: "/skills",
      name: "skills",
      component: Skills,
    },
    {
      path: "/experince",
      name: "experince",
      component: Experince,
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
      path: "/Resume",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/contact",
      name: "contact",
      component: mycontact,
    },
  ],
});

export default router;
