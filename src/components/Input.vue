<template>
    <label :class="{error: error}">
        <input :class="{'has-text': !!value}" :value="value" @input="handleInput"/>
        <span>{{label}}</span>
    </label>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
    name: 'Input',
    props: {
        label: String,
        value: String,
        error: Boolean,
    }
})
export default class Input extends Vue {

    handleInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.$emit('input', target.value);
    }

}
</script>

<style lang="scss" scoped>
    label {
        position: relative;
        padding: 10px 15px;
        border: 2px black solid;
        border-radius: 5px;
        display: inline-block;

        &.error {
            border-color: $color-error;
            span {
                color: $color-error;;
            }
        }


        span {
            position: absolute;
            bottom: 10px;
            left: 10px;
            font-weight: bold;
            padding: 0 5px;
            background: white;
            transition: 0.15s all ease;
        }

        input {
            width: 100%;
            font-size: 1rem;
            border: none;
            outline: none;

            &:focus, &.has-text {
                & + span {
                    bottom: 100%;
                    transform: translateY(50%);
                    font-size: 0.8rem;
                }
            }
        }
    }
</style>
