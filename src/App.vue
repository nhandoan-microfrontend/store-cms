<template>
    <div id="app">
        <component :is="layout"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import {mapState} from "vuex";
import BlankLayout from "@/components/BlankLayout.vue";
import MainLayout from "@/components/MainLayout.vue";

@Component({
    components: {MainLayout, BlankLayout},
    computed: {
        ...mapState('auth', ['token'])
    }
})
export default class App extends Vue {
    token!: string;

    get isLoggedIn(): boolean {
        return !!this.token
    }

    @Watch('token', {immediate: true})
    handleTokenChange (token: string): void {
        if (token) {
            if (this.$route.name !== 'Home') {
                this.$router.push('/');

            }
            return;
        }
        this.$router.push('/login');
    }

    get layout(): string {
        return this.isLoggedIn ? 'MainLayout' : 'BlankLayout';
    }

}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.logged-in {
    margin-left: 300px;

}

</style>
