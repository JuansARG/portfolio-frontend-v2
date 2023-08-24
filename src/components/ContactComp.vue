<script setup lang="ts">
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { useContact } from '@/composables/useContact';
import type { Form } from '@/interfaces/Form';
import SpinnerLoadingComp from './SpinnerLoadingComp.vue';
import BottonSticky from './BottonSticky.vue';

const { submitMail } = useContact();

const errors = ref<boolean>(false);
const waiting = ref<boolean>(false);

const form = ref<Form>({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const submit = (formData: Form) => {
    waiting.value = true;

    submitMail(formData)
        .then(() => {
            toast("¡El email ha sido enviado, revisa tu correo!");

            errors.value = false;
            waiting.value = false;
            form.value = {
                name: '',
                email: '',
                subject: '',
                message: '',
            }
        }).catch(() => {
            toast("¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.");

            errors.value = true;
            waiting.value = false;
        });

}
</script>
<template>
    <div class="row p-3 m-0 d-flex flex-column justify-content-center" id="contact">

        <div class="container col-12 col-md-9 col-xl-8 col-xxl-5 text-white">
            <p class="text-center m-0 mb-3 fw-bold border-bottom pb-2">Contacto</p>
            <form class="d-flex flex-column align-items-center py-4 text-white gap-2" @submit.prevent="submit(form)">

                <div class="form-floating mb-3 w-100 text-black-50 fw-bold border-0 ">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="floatingInputName" 
                        placeholder="name@example.com"
                        v-model="form.name"
                        required>
                    <label for="floatingInputName">Nombre:</label>
                </div>
                <div class="form-floating mb-3 w-100 text-black-50 fw-bold">
                    <input 
                        type="email" 
                        class="form-control" 
                        id="floatingInputEmail" 
                        placeholder="name@example.com"
                        v-model="form.email"
                        required>
                    <label for="floatingInputEmail">Email:</label>
                </div>
                <div class="form-floating mb-3 w-100 text-black-50 fw-bold">
                    <input 
                        type="text"
                        class="form-control" 
                        id="floatingInputSubject" 
                        placeholder="name@example.com"
                        v-model="form.subject"
                        required>
                    <label for="floatingInputSubject">Asunto:</label>
                </div>
                <div class="form-floating w-100 text-black-50 fw-bold">
                    <textarea class="form-control" 
                        placeholder="Leave a comment here" 
                        id="floatingTextareaMessage" 
                        style="height: 100px"
                        v-model="form.message"
                        required/>
                    <label for="floatingTextareaMessage">Mensaje:</label>
                </div>

                <button class="btn mt-2 fs-3 text-white border border-2" type="submit" :disabled="waiting">
                    <template v-if="!waiting">Enviar</template>
                    <SpinnerLoadingComp v-if="waiting" />
                </button>
            </form>
        </div>

        <BottonSticky />

    </div>
</template>
<style scoped lang="scss">
textarea {
    resize: none;
}
.container {
    p {
    font-size: 4.2rem !important;
    }
} 

.btn:hover {
    background-color: white;
    color: #3e818c !important;
    font-weight: bolder;
    border-color: white;
}

.form-p {
    font-size: 1.5rem!important;
}

.form-control {
    box-shadow: none!important;
    border-color: white!important;
}

/* Media queries */
@media screen and (min-width: 767px) {
    .row {
        min-height: 90vh;
    }
}

@media screen and (min-width: 1019px) {
    .row {
        min-height: 88vh;
    }
}
</style>