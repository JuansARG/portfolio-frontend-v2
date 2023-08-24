<script setup lang="ts">

interface Props {
    width?: string,
    height?: string;
}

const props = withDefaults(defineProps<Props>(), {
    width: "2.8",
    height: "2.8",
})

</script>

<template>
    <div class="container d-flex justify-content-center">
        <div class="spinner-border" role="status" :style="{ width: props.width.concat('rem'), height: props.height.concat('rem') }">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>


<style scoped lang="scss">
// .spinner-border {
//     width: 2.8rem;
//     height: 2.8rem;
// }
</style>