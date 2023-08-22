<script setup lang="ts">
import { ref, toRef } from 'vue';
import type { Skill } from '../interfaces/userPortfolio';
import { TypeSkill } from '../interfaces/userPortfolio';

interface Props {
    skills: Skill[];
}

const props = defineProps<Props>();
const skills = toRef(props, 'skills');

const skillsOrderByTitle = ref<Skill[]>([]);

skillsOrderByTitle.value = skills.value.sort((a:Skill, b:Skill) => {
        if( a.title > b.title ) return 1;
        if( a.title < b.title ) return -1;
        return 0;
    });
</script>
<template>
    <div class="skills-list col-12 col-md-5 d-flex flex-column align-items-center mt-2">
        <p class="text-center text-white text-capitalize col-12" 
            v-text="`<${skills[0].typeSkill.toLowerCase()}/>`" />
        <ul class="list-group list-group-flush align-items-center col-12 col-xxl-8">
            <template v-for="skill in skills" :key="skill.id">
                <li    
                    class="list-group-item list-group-item-success list-group-item-action mb-1 text-center font-monospace p-1 "
                    v-if="skill.typeSkill === TypeSkill.Soft" 
                    v-text="skill.title"/>
                <li 
                    class="list-group-item list-group-item-danger list-group-item-action mb-1 text-center font-monospace p-1"
                    v-else 
                    v-text="skill.title"/>
            </template>
        </ul>
    </div>
</template>
<style scoped>
p {
    font-size: 3.5rem !important;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
}
</style>