<template>
    <div>
        <router-view />
    </div>

</template>

<script>
import {Component, Vue} from "vue-property-decorator";

@Component({
    name: 'BlankLayout',
})
export default class BlankLayout extends Vue {
}
</script>

<style scoped>

</style>
