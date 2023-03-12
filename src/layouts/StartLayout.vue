<template>
    <q-layout view="lHh lpr fff" class="bg-pd">
        <q-header elevated>
            <q-toolbar style="height: 72px;" class="bg-teal-10 bg-pd">
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>

                <q-toolbar-title class="text-center">CODE {4} KIDS</q-toolbar-title>

                <q-btn-dropdown color="dark" icon="account_circle">
                    <q-list>
                        <q-item clickable v-close-popup @click="onItemClick" to="/login" exact>
                            <q-item-section avatar>
                                <q-avatar icon="login" color="teal-10" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>INICIAR SESIÓN</q-item-label>
                                <q-item-label caption>¡Inicia sesión en tu cuenta!</q-item-label>
                            </q-item-section>

                        </q-item>

                        <q-item clickable v-close-popup @click="onItemClick" to="/signup" exact>
                            <q-item-section avatar>
                                <q-avatar icon="input" color="amber-10" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>REGISTRO</q-item-label>
                                <q-item-label caption>¡Crea una cuenta si aún no tienes una!</q-item-label>
                            </q-item-section>
                        </q-item>

                    </q-list>
                </q-btn-dropdown>




            </q-toolbar>

        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer elevated>
            <q-tabs switch-indicator align="justify" class="bg-white">
                <q-route-tab class="bg-pd text-red-10" icon="home" name="index" label="Inicio" to="/" exact />
                <q-route-tab class="bg-pd text-teal-10" icon="newspaper" name="blog" label="Blogs" to="/blog" exact />
                <q-route-tab class="bg-pd text-amber-10" icon="contact_support" name="about" label="Acerca" to="/about"
                    exact />
            </q-tabs>
        </q-footer>
    </q-layout>
</template>
  
<script>
//import { ref } from 'vue'

export default {
    setup() {
        return {
            //tab: ref('index')
            onItemClick() {
                // console.log('Clicked on an Item')
            }
        }
    }
}
</script>

<style>
.bg-negro-pd {
    background-color: #16171b;
}
</style>