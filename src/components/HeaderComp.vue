<script setup lang="ts">

</script>

<template>
    <nav class="navbar navbar-expand-lg py-3 border-bottom border-light" data-bs-theme="dark">
        <div class="container-fluid justify-content-center ">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div 
                class="collapse navbar-collapse justify-content-center" 
                id="navbarNav">
                <ul class="navbar-nav fs-5 py-3 fst-italic gap-3 me-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutme">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#skills">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#education">Formación</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    background-color: #004e59;
    font-family: 'Roboto Slab', serif!important;

    a {
        color: white;
        border-color: white;
        border-bottom: 1px solid;
        border-left: 1px solid transparent;
        padding-left: .7rem!important;
        text-decoration: none;
        transition: all 1s;

        &:hover {
            border-left: 1px solid;
            padding-left: 1.2rem!important;
        }
    }


}
</style>