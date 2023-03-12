<template>
    <q-layout view="lHr lpR lFr">
        <q-page-container>
            <q-page class="flex flex-center bg-pd" padding>
                <q-card flat bordered>
                    <div class="flex flex-center">
                        <q-img src="../assets/logo-code-for-kids.svg" width="200px" height="200px" />
                    </div>
                    <q-card-section>
                        <q-btn fab color="pink-10" icon="volume_up" class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);" />
                        <br />




                        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md" action="/dashboard">

                            <q-input v-model="email" standout="bg-teal text-white" label="Email" type="email"
                                hint="Ejemplo: nombreuser@gmail.com" lazy-rules
                                :rules="[val => val && val.length > 0 || 'El email es obligatorio', (val, rules) => rules.email(val) || 'Ingresa un correo válido']">
                                <template v-slot:append>
                                    <q-icon name="email" />
                                </template>
                            </q-input>

                            <q-input v-model="password" standout="bg-teal text-white" :type="isPwd ? 'password' : 'text'"
                                label="Contraseña" hint="Ejemplo: Bbc1tA_br" lazy-rules
                                :rules="[val => val.length >= 8 && val.length <= 30 || 'Escribe un password de 8 - 30 caracteres']">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>

                            <q-input v-model="username" standout="bg-teal text-white" label="Username"
                                hint="Ejemplo: aleale123" lazy-rules
                                :rules="[val => val.length > 0 || 'Tienes que elegir un nombre para tu usuario']">
                                <template v-slot:append>
                                    <q-icon name="person" />
                                </template>
                            </q-input>

                            <q-input standout="bg-teal text-white" type="number" v-model="edad" label="Edad"
                                hint="Ejemplo: 12" lazy-rules :rules="[val => val !== '' || 'Ingresa tu edad',
                                val => val > 0 && val < 100 || 'Ingresa una edad válida']">
                                <template v-slot:append>
                                    <q-icon name="event" />
                                </template>
                            </q-input>

                            <q-toggle v-model="accept" label="Aceptar términos y condiciones" color="cyan-10"
                                checked-icon="check" unchecked-icon="clear" keep-color />

                            <div class="text-center">
                                <q-btn-group push>
                                    <q-btn push type="submit" label="Registrate" color="teal-10" icon="check_circle" />
                                    <q-btn push type="reset" label="Cancelar" color="red-10" icon="cancel" />
                                </q-btn-group>
                            </div>

                        </q-form>





                    </q-card-section>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {

        // Variables model del formulario
        const email = ref('');
        const edad = ref('');
        const password = ref('');
        const username = ref('');
        const accept = ref(false);

        return {
            // Variable del campo del ojito del password
            isPwd: ref(true),
            // Retorno de variables del documento
            email,
            edad,
            password,
            username,
            accept,

            // Metodos de envio y limpieza del formulario
            onSubmit(event) {
                event.preventDefault();
                alert("Vamos a validar los datos");
                if (accept.value === true) {
                    alert("Has aceptado los términos y condiciones");
                } else {
                    alert("Acepta los terminos y condiciones");
                }
            },

            onReset() {
                email.value = '';
                edad.value = '';
                password.value = '';
                username.value = '';
                accept.value = false;
            }
        }
    }
}
</script>


<style>
.bg-granadiente {
    background: linear-gradient(to top, lime, cyan);
}
</style>

