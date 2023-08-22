<script setup lang="ts">
import { toRef, ref } from 'vue';
import type { Skill } from '@/interfaces/userPortfolio';
import { TypeSkill } from '@/interfaces/userPortfolio';
import SkillsList from './SkillsList.vue';

interface Props {
    skills: Skill[];
}

const props = defineProps<Props>();
const skills = toRef(props, 'skills');

let softSkills = ref<Skill[]>([]);
let hardSkills = ref<Skill[]>([]);

const orderSkills = ():void => {
    softSkills.value = skills.value.filter(skill => skill.typeSkill === TypeSkill.Soft);
    hardSkills.value = skills.value.filter(skill => skill.typeSkill === TypeSkill.Hard);
}

orderSkills();
</script>
<template>
    <div 
        class="row p-3 m-0" id="skills">
        <div class="container px-0 d-flex flex-column align-items-center text-white">
            <p class="text-center text-white m-0 mb-3 fw-bold border-bottom pb-2">Habilidades</p>
            <div class="soft-skills-container d-flex flex-column align-items-center col-12">
                <SkillsList :skills="softSkills" />
                <SkillsList :skills="hardSkills" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.container p {
    font-size: 4rem !important;
}
.row{
    min-height: 100vh;
}


/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {
    .soft-skills-container {
        flex-direction: row !important;
        justify-content: center;
        align-items: start !important;
        gap: 1rem;
    }
}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
    .soft-skills-container {
        flex-direction: row !important;
        justify-content: center;
        align-items: start !important;
        gap: 1rem;
    }
}
</style>