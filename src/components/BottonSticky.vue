<script setup lang="ts">
import { Icon } from '@iconify/vue';


</script>
<template>
    <span class="ms-auto mt-auto btn-sticky">
        <a class="btn mt-2 fs-3 text-white border border-2" href="#header">
            <Icon height="35px" icon="grommet-icons:link-top"/>
        </a>
    </span>
</template>

<style scoped lang="scss">
span {
    width: fit-content;
    height: fit-content;
}
a:hover {
    background-color: white;
    color: #3e818c !important;
    border-color: #3e818c;
}
</style>