<script setup lang="ts">
import CardProjectComp from './CardProjectComp.vue';
import { toRef } from 'vue';
import type { Project } from '../interfaces/userPortfolio';

interface Props {
    projects: Project[];
}

const props = defineProps<Props>();
const projects = toRef(props, 'projects')
</script>

<template>
    <div 
        class="row p-1 m-0 text-white"
        id="projects">
        <div class="container d-flex flex-column align-items-center">
            <p class="text-center m-0 mb-3 fw-bold border-bottom pb-2">Proyectos</p>
            <div class="container-card col-12 d-flex flex-column gap-3 align-items-center justify-content-center">
                <template v-for="project in projects" :key="project.id">
                    <CardProjectComp :project="project" />
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container p {
    font-size: 4.2rem !important;
}


/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
    .container-card {
        flex-direction: row!important;
        flex-wrap: wrap!important;
    }
}
</style>