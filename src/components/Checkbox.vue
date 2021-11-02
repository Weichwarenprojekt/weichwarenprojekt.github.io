<template>
    <div :class="{ 'checkbox-active': toggled }" class="checkbox" @click="toggled = !toggled">
        <svg>
            <use :href="`${require('@/assets/img/icons.svg')}#check`"></use>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Checkbox",
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            toggled: this.modelValue,
        };
    },
    watch: {
        /**
         * Watch for changes from the outside
         */
        modelValue() {
            this.toggled = this.modelValue;
        },
        /**
         * Watch for changes of the v-model
         */
        toggled() {
            this.$emit("update:modelValue", this.toggled);
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars";

.checkbox {
    border-radius: @border-radius;
    background: transparent;
    width: 2.2rem;
    height: 2.2rem;
    border: 0.2rem solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 200ms;
    margin-right: 1rem;
    flex: 0 0 auto;

    &:hover {
        border-color: @prime-1;
    }

    svg {
        fill: white;
        width: 1.3rem;
        height: 1.3rem;
        display: none;
    }
}

.checkbox-active {
    background: black;

    &:hover {
        border-color: black;
    }

    svg {
        display: block;
    }
}
</style>
