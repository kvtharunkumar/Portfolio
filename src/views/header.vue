<script setup>
import DayLightMode from '../UI/DayLightMode.vue';
import {ref} from 'vue';
const showMenu=ref(false);
import { RouterLink } from 'vue-router';
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="relative bg-white dark:bg-[#090a11]">
      <nav class="container px-6 py-8 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
          <RouterLink
            to="/"
            class="text-lg font-display text-[#36454F] dark:hover:text-green-500 dark:text-white lg:text-lg font-bold cursor-pointer hover:text-[#ee7534]"
          >
            K V Tharun Kumar
          </RouterLink>
          <!-- Mobile menu button -->
          <div @click="showMenu =!showMenu" class="flex lg:hidden">
              <button
                type="button"
                class="
                text-[#36454F]
                dark:hover:text-green-500
                dark:text-white
                
              
                cursor-pointer
                hover:text-[#ee7534]
                "
              >
              <svg  v-if="showMenu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
                <svg  v-else viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0">
          <RouterLink
            to="/"
            class="font-display text-[#36454F] dark:hover:text-green-500 dark:text-white text-md font-bold cursor-pointer hover:text-[#ee7534]"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/skills"
            class="font-display text-[#36454F] dark:hover:text-green-500 dark:text-white text-md font-bold cursor-pointer hover:text-[#ee7534]"
          >
            Skills
          </RouterLink>
          <RouterLink
            to="/projects"
            @click.prevent="scrollToSection('projects-section')"
            class="font-display text-[#36454F] dark:hover:text-green-500 dark:text-white text-md font-bold cursor-pointer hover:text-[#ee7534]"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/experience"
            class="font-display text-[#36454F] dark:hover:text-green-500 dark:text-white text-md font-bold cursor-pointer hover:text-[#ee7534]"
          >
            Experience
          </RouterLink>
          <RouterLink
            to="/resume"
            class="font-display text-[#36454F] dark:hover:text-green-500 dark:text-white text-md font-bold cursor-pointer hover:text-[#ee7534]"
          >
            Resume
          </RouterLink>
          <RouterLink
            to="/contact"
            class="font-display text-[#36454F] dark:hover:text-green-500 dark:text-white text-md font-bold cursor-pointer hover:text-[#ee7534]"
          >
            Contact
          </RouterLink>
          <li class="text-[#36454F]">
            <hr>
          </li>
          <DayLightMode />
        </ul>
      </nav>
    </div>
  </div>
</template>


