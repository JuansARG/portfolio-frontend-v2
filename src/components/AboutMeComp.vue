<script setup lang="ts">
import { toRef } from 'vue'
import { Icon } from '@iconify/vue';
import type { UserPortfolio } from '../interfaces/userPortfolio';

interface Props {
    userData: UserPortfolio;
}

const props = defineProps<Props>();
const userData = toRef(props, 'userData');
</script>

<template>

    <div 
        class="row p-3 m-0 d-flex align-items-center "
        id="aboutme" 
        >
        <div class="container px-0">
            <div class="perfil-container d-flex flex-column gap-2 mb-3">
                <div>
                    <p
                        class="name text-center m-0 mb-3 fw-bold border-bottom pb-2"
                        v-text="`${userData.name} ${userData.surname}`"/>
                    <p 
                        class="title text-center fs-2 m-0 fst-italic"
                        v-text="userData.title"/>
                </div>
                <div class="img-container align-self-center">
                    <img 
                        :src="userData.imageURL" 
                        class="img-fluid rounded-circle shadow-lg" alt="Mi foto de perfil">
                </div>
            </div>
            <div class="text-container col col-sm-9 p-2 mb-2 shadow-sm">
                <p
                    class="text-profile fs-5 m-0"
                    v-text="userData.profile"/>
            </div>
            <div class="icons-container d-flex gap-2 justify-content-end col col-sm-9">
                <a class="nav-link border p-1 rounded-3 shadow-sm" to="https://www.linkedin.com/in/juanisat/" target="_blank">
                    <Icon height="50px" icon="devicon:linkedin" />
                </a>
                <a class="nav-link border p-1 rounded-3 shadow-sm" to="https://github.com/JuansARG" target="_blank">
                    <Icon height="50px" icon="mingcute:github-fill" />
                </a>
                <a class="nav-link border p-1 rounded-3 shadow-sm" to="mailto:juansarmientog96@gmail.com" target="_blank">
                    <Icon height="45px" icon="logos:google-gmail" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row {
    height: max-content;
    color: white;
    }
.img-container {
    max-width: 18rem;
}
.name {
    font-size: 4.2rem !important;
    line-height: 1;
}

.text-container {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(8px);
}
.text-profile {
    text-align: justify;
}
a {
    cursor: pointer;
}



/* Media queries */
@media screen and (min-width: 767px) {
    .row {
        min-height: 100vh;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
    .text-container, .icons-container {
        align-self: center;
    }
}


@media screen and (min-width: 1023px) {
    .container{
        justify-content: center;
    }
    .perfil-container {
        flex-direction: row !important;
        justify-content: center;
        align-items: center;
        gap: 1.5rem !important;
    }
    .row{
        min-height: 100vh;
    }
}


@media screen and (min-width: 1439px) {
    .row{
        min-height: 80vh;
    }
}


@media screen and (min-width: 1919px) {
    .row{
        min-height: 100vh;
    }
}
</style>