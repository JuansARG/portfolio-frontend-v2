<script setup lang="ts">
import { ref } from 'vue'
const year = ref<number>(new Date().getFullYear());
</script>

<template>
    <div>
        <div class="d-flex flex-column w-100 text-center pt-3 text-white-50 border-top">
            <p>Desarrollado con Vue 3&#x2728; y Java&#x2615;</p>
            <div class="div-copy">
                <p class="mb-1">Copyright &#x00A9; {{ year }}</p>
                <p class="mb-2">Todos los derechos Reservados</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    background-color: #53929d !important;
    font-family: 'Roboto Slab', serif;
}
</style>