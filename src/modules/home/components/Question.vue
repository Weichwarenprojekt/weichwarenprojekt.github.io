<template>
    <div ref="question" :class="{ expanded: expanded }" class="question" @click="toggle(!this.expanded)">
        <div class="question-title">
            {{ question }}
            <svg>
                <use :href="`${require('@/assets/img/icons.svg')}#arrow`"></use>
            </svg>
        </div>
        <div class="description">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Question",
    props: {
        // The question to be shown
        question: {
            type: String,
            default: "Question",
        },
    },
    mounted() {
        // Collapse on resize
        window.addEventListener("resize", this.onResize);
    },
    unmounted() {
        // Remove event
        window.removeEventListener("resize", this.onResize);
    },
    data() {
        return {
            // True if the card shall be expanded
            expanded: false,
        };
    },
    methods: {
        /**
         * Toggle the question card
         */
        toggle(expanded: boolean) {
            this.expanded = expanded;
            const questionDIV = this.$refs.question as HTMLDivElement;
            if (this.expanded) questionDIV.style.height = `${questionDIV.scrollHeight}px`;
            else questionDIV.style.height = `5rem`;
        },
        /**
         * Collapse on resize
         */
        onResize() {
            this.toggle(false);
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

@default-height: 5rem;

.question {
    padding: 0 @normal-padding;
    border-radius: @border-radius;
    background: @grey;
    font-weight: 400;
    cursor: pointer;
    transition: height 300ms;
    overflow: hidden;
    height: @default-height;
    margin-top: @small-padding;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        transition: all 300ms;
    }

    &:first-of-type {
        background: black;
    }
}

.expanded {
    height: auto;

    svg {
        transform: rotateZ(180deg);
    }
}

.question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: @h3;
    height: @default-height;
}

.description {
    font-size: @text;
    font-weight: 300;
    transition: 500ms;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &::v-deep {
        * {
            font-weight: 300;
        }

        b {
            font-weight: 400;
        }

        ul {
            padding-left: 1.5rem;
        }
    }
}
</style>
