<template>
    <ul class="navigation-list">
        <li v-for="(item, index) in itemList" :key="index">
            <router-link :to="item.link">{{item.name}}</router-link>
        </li>
    </ul>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";

@Component({
    name: 'SideMenuNavigationList',
    props: {
        itemList: Array,
    }
})
export default class SideMenuNavigationList extends Vue {
}
</script>

<style lang="scss" scoped>
    .navigation-list {
        padding-left: 10px;
        list-style-type: none;
        padding-right: 20px;

        li {
            margin-bottom: 15px;
        }

        a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            width: 100%;
            display: block;
            padding: 5px 10px;
            border-radius: 5px;
            transition: 0.15s ease;
            &:hover {
                background-color: white;
                color: #2c3e50;
            }
        }
    }
</style>
