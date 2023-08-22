<script setup lang="ts">
import { toRef } from 'vue';
import CardEducationComp from './CardEducationComp.vue';
import type { Formation } from '../interfaces/userPortfolio';

interface Props {
    formations: Formation[];
}

const props = defineProps<Props>();
const formations = toRef(props, 'formations');


const parseStringToNumber = (startDate:String):Number => {
    const arrayStartDate: String[] = startDate.split('/');
    const getTime: Number = new Date(
        Number(arrayStartDate[2]),
        Number(Number(arrayStartDate[1]) - 1),
        Number(arrayStartDate[0])
    ).getTime();
    return getTime;
}

const compareFn = (a:Formation, b:Formation) => {
    const fechaA: Number = parseStringToNumber(a.startDate);
    const fechaB: Number = parseStringToNumber(b.startDate);
    return +fechaA - +fechaB;
}

const formationsOrderBydate = [...formations.value].sort(compareFn);
</script>
<template>
    <div class="row p-3 m-0" id="education">
        <div class="container px-0 d-flex flex-column align-items-center text-white">
            <p class="text-center m-0 mb-3 fw-bold border-bottom pb-2">Formación</p>
            <div class="container-card-education d-flex flex-column gap-3 align-items-center justify-content-center col-12">
                <template v-for="formation in formationsOrderBydate" :key="formation.id">
                    <CardEducationComp :formation="formation" />
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
    .container-card-education {
        flex-direction: row!important;
        flex-wrap: wrap!important;
    }
}
@media screen and (min-width: 1349px) {
    .container-card-education {
        flex-direction: row!important;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>