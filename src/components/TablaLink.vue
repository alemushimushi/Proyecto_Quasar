<template>
    <q-route-tab :icon="icono" :name="title" :label="title" :to="link" class="bg-pd" exact />
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: 'TablaLink',
    props: {
        title: {
            type: String,
            required: true
        },

        caption: {
            type: String,
            default: ''
        },

        link: {
            type: String,
            default: '#'
        },

        icono: {
            type: String,
            default: ''
        },

        color: {
            type: String,
            default: 'teal-10'
        }
    }
})
</script>

<style></style>