<template>
    <button :class="buttonClass" :disabled="disabled" @click="$emit('click')" type="button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
    name: 'Button',
    props: {
        color: String,
        disabled: Boolean
    }
})
export default class Button extends Vue {
    color!: string;
    get buttonClass(): string {
        let result = 'button';
        if (this.color) {
            result += ` ${this.color}`
        }
        return result;
    }
}
</script>

<style scoped lang="scss">
    .button {
        padding: 10px 15px;
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: $color-default;
        font-weight: bold;
        &:disabled {
            cursor: not-allowed;
        }
        &.primary {
            background-color: $color-primary;
            color: white;
        }
    }
</style>
