<template>
  <q-layout view="hHr lpr lFr">
    <q-header elevated>
      <q-toolbar class="bg-pd">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-center">
          Quasar App
        </q-toolbar-title>

        <div>
          <q-btn color="white" text-color="dark" icon="diamond" label="1" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-pd" v-model="leftDrawerOpen" show-if-above elevated>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list>
          <q-separator spaced />
          <q-item-label header>
            Recursos
          </q-item-label>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container class="bg-pd">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList1 = [
  {
    title: 'PERFIL',
    icon: 'school',
    link: '/dashboard/perfil'
  },
  {
    title: 'TIENDA',
    icon: 'code',
    link: '/dashboard/tienda'
  },
  {
    title: 'CURSOS',
    icon: 'chat',
    link: '/dashboard/'
  },
  {
    title: 'BLOGS',
    icon: 'school',
    link: '/dashboard/blog'
  },
  {
    title: 'ACERCA DE',
    icon: 'code',
    link: '/dashboard/about'
  },
  {
    title: 'CONTACTO',
    icon: 'chat',
    link: '/dashboard/contacto'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList1,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
