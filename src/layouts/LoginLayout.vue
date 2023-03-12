<template>
    <q-layout view="lHr lpR lFr">
        <q-page-container>
            <q-page class="flex flex-center bg-pd bg-granadiente" padding>
                <q-card flat bordered>
                    <div class="flex flex-center">
                        <q-img src="../assets/logo-code-for-kids.svg" width="200px" height="200px" />
                    </div>
                    <q-card-section>
                        <q-btn fab color="pink-10" icon="volume_up" class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);" />
                        <br />




                        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">



                            <q-input v-model="tok" standout="bg-teal text-white bg-pd" label="Username"
                                hint="Ejemplo: aleale123 o aleale@gmail.com" lazy-rules
                                :rules="[val => val.length > 0 || 'Tu usuario o email es requerido']">
                                <template v-slot:append>
                                    <q-icon name="person" />
                                </template>
                            </q-input>

                            <q-input v-model="pas" standout="bg-teal text-white bg-pd" :type="isPwd ? 'password' : 'text'"
                                label="Contraseña" hint="Ejemplo: Bbc1tA_br" lazy-rules
                                :rules="[val => val.length >= 8 && val.length <= 30 || 'Escribe un password válido']">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>

                            <div class="text-center">
                                <q-btn-group push>
                                    <q-btn push type="submit" label="Ingresar" color="teal-10" icon="check_circle" />
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
        const tok = ref('');
        const pas = ref('');

        return {
            // Variable del campo del ojito del password
            isPwd: ref(true),
            // Retorno de variables del documento
            tok,
            pas,

            // Metodos de envio y limpieza del formulario
            onSubmit(event) {
                event.preventDefault();
                alert("Vamos a validar los datos");
            },

            onReset() {
                pas.value = '';
                tok.value = '';
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