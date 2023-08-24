<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
    errorMessage: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center gap-3 text-white">
        <Icon icon="carbon:data-error" width="7rem" height="7rem"/>
        <h1 class="col-8 text-center fw-semibold">{{ props.errorMessage }}</h1>
    </div>
</template>

<style scoped>

</style>