<template>
  <NavBar />
  <div class="container-fluid p-0">
    <AboutSection />
    <hr class="m-0" />
    <ExperienceSection />
    <hr class="m-0" />
    <EducationSection />
    <hr class="m-0" />
    <SkillsSection />
    <hr class="m-0" />
    <InterestsSection />
    <hr class="m-0" />
    <ProjectsSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import InterestsSection from './components/InterestsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'

onMounted(() => {
  const sideNav = document.querySelector('#sideNav')
  if (sideNav && window.bootstrap) {
    new window.bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      offset: 74,
    })
  }

  const navbarToggler = document.querySelector('.navbar-toggler')
  const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'))
  responsiveNavItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })
})
</script>
