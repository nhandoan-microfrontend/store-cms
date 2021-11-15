<template>
    <div class="login-page">
        <div>
            <h1>Nate's Store CMS</h1>
            <Input label="Email" v-model="email" class="login-input"/>
            <Input label="Password" v-model="password" class="login-input"/>
            <Button class="login-button" color="primary" @click="handleLogin">Login</Button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import {mapActions} from "vuex";
import {UserLoginInfo} from "@/models/UserModels";

@Component({
    name: 'Login',
    components: {Button, Input},
    methods: {
        ...mapActions('auth', ['authLogin', 'clearToken'])
    }
})
export default class Login extends Vue {
    authLogin!: (userInfo: UserLoginInfo) => Promise<void>;
    clearToken!: () => void;

    email = '';
    password = '';

    mounted(): void {
        this.clearToken();
    }

    handleLogin(): void {
        this.authLogin({
            email: this.email,
            password: this.password,
        })
    }
}
</script>

<style lang="scss" scoped>
    .login-page {
        text-align: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > div {
            width: 500px;
            margin: auto;
            label {
                width: 100%;
            }
        }
        h1 {
            margin-bottom: 20px;
        }

        .login-input {
            margin-bottom: 10px;

        }
    }

    .login-button {
        font-size: 1.1rem;
        width: 100%;
    }

</style>
