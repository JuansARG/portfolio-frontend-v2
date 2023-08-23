<script setup lang="ts">
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import AboutMeComp from '../components/AboutMeComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import EducationComp from '@/components/EducationComp.vue';
import ContactComp from '@/components/ContactComp.vue';

import { useData } from '../composables/useData';

const { data: userData, isLoading  } = useData();
</script>

<template>
    <header id="header">
        <HeaderComp />
    </header>

    <main>

        <h1 v-if="isLoading">Cargando...</h1>
        <!-- <h1 v-if="isError">{{ error }}</h1> -->

        <template v-else>
            <AboutMeComp :user-data="userData"/>
            <ProjectsComp :projects="userData.projects"/>
            <SkillsComp :skills="userData.skills"/>
            <EducationComp :formations="userData.formations"/>
            <ContactComp />
        </template>


    </main>

    <footer>
        <FooterComp />
    </footer>
</template>

<style scoped lang="scss">
main {
    font-family: 'Roboto Slab', serif;
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>