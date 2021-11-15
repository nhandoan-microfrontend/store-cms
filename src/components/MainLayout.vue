<template>
    <div class="main-layout">
        <SideMenu />
        <router-view />
    </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import SideMenu from "@/components/SideMenu/SideMenu";

@Component({
    name: 'MainLayout',
    components: {SideMenu},
})
export default class MainLayout extends Vue {
}
</script>

<style scoped>
    .main-layout {
        margin-left: 300px;
    }
</style>
