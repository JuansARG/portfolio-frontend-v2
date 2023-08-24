<script setup lang="ts">
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import AboutMeComp from '../components/AboutMeComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import EducationComp from '@/components/EducationComp.vue';
import ContactComp from '@/components/ContactComp.vue';
import SpinnerLoadingComp from '@/components/SpinnerLoadingComp.vue';
import ErrorComp from '@/components/ErrorComp.vue';

import { useData } from '../composables/useData';

const { data, hasError, errorMessage, isLoading } = useData();
</script>

<template>
    <header id="header">
        <HeaderComp />
    </header>

    <main>

        <div v-if="isLoading" class="container-isLoading d-flex flex-column justify-content-center align-items-center gap-3 text-white">
            <SpinnerLoadingComp width="7" height="7"/>
            <h1>Cargando...</h1>
        </div>

        <div v-else-if="hasError">
            <ErrorComp class="container-isError" :error-message="errorMessage!"/>
        </div>

        <template v-else>
            <AboutMeComp :user-data="data!"/>
            <ProjectsComp :projects="data?.projects!"/>
            <SkillsComp :skills="data?.skills!"/>
            <EducationComp :formations="data?.formations!"/>
            <ContactComp />
        </template>


    </main>

    <footer>
        <FooterComp />
    </footer>
</template>

<style scoped lang="scss">
main, .container-isLoading, .container-isError {
    font-family: 'Roboto Slab', serif;
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.container-isLoading, .container-isError{
    min-height: 79.2vh;
    width: 100vw;
}

/* Media queries */
@media screen and (min-width: 767px) {
    .container-isLoading, .container-isError{
        min-height: 82.4vh;
    }
}


@media screen and (min-width: 1023px) {
    .container-isLoading, .container-isError{
        min-height: 78.7vh;
    }
}
</style>