<template>
    <div class="side-menu">
        <div class="logo-wrapper">
            <Logo/>
        </div>
        <div class="entity-navigation">
            <SideMenuNavigationList :itemList="navigationList"/>
        </div>
        <div class="logout-navigation">
            <SideMenuNavigationList :itemList="logoutNavigationList"/>
        </div>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Logo from "@/components/Logo.vue";
import SideMenuNavigationList from "@/components/SideMenu/SideMenuNavigationList.vue";

@Component({
    name: 'SideMenu',
    components: {SideMenuNavigationList, Logo},
    data: () => ({
        navigationList: [
            {
                name: 'Products',
                link: '/products'
            }, {
                name: 'Categories',
                link: '/categories',
            }, {
                name: 'Users',
                link: '/users'
            }, {
                name: 'Orders',
                link: '/orders'
            }
        ],
        logoutNavigationList : [
            {
                name: 'Logout',
                link: '/login'
            }
        ]
    })
})
export default class SideMenu extends Vue {
}
</script>

<style scoped>
.side-menu {
    background-color: #2c3e50;
    color: white;
    height: 100vh;
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
}

.logout-navigation {
    margin-top: auto;
}

.entity-navigation {
    margin-top: 100px;
}

.logo-wrapper {
    padding-left: 20px;
}
</style>
