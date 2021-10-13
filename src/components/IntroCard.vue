<template>
    <div class="intro-card">
        <div class="intro-text">
            <h1>{{ title }}</h1>
            <div class="intro-description">{{ description }}</div>
        </div>
        <img :src="image" alt="Intro Image" class="intro-image" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "IntroCard",
    props: {
        title: {
            type: String,
            default: "Title",
        },
        description: {
            type: String,
            default: "Description",
        },
        image: {
            type: String,
            default: require("@/assets/img/contact/contact.svg"),
        },
    },
    data() {
        return {
            toggled: false,
        };
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars";

.intro-card {
    border-radius: @border-radius;
    background: @grey;
    padding: @big-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.intro-text {
    flex: 1 1 auto;
}

.intro-description {
    font-weight: 300;
    font-size: @h3;
}

.intro-image {
    margin-left: @big-padding;
    width: 50%;
}

@media screen and (max-width: @mobile-breakpoint) {
    .intro-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .intro-image {
        width: 100%;
        margin-left: 0;
        margin-top: @normal-padding;
    }
}
</style>
