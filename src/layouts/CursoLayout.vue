<template>
    <q-page-container>
        <router-view />
    </q-page-container>
    <q-footer elevated class="bg-white">
        <q-linear-progress stripe size="10px" :value="progress1" />
        <q-tabs align="justify" switch-indicator class="bg-white">
            <q-route-tab class="bg-pd text-teal-10" icon="assignment_turned_in" name="progreso" label="Progreso"
                to="/dashboard/c-introduccion/" exact />
            <q-route-tab class="bg-pd text-red-10" icon="auto_stories" name="temario" label="Temario"
                to="/dashboard/c-introduccion/temario" exact />
        </q-tabs>
    </q-footer>
</template>

<script>
export default {
    setup() {
        return {
            progress1: 0.4
        }
    }
}
</script>