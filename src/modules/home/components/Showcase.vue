<template>
    <div :class="['showcase', { 'showcase-left': left }]">
        <div class="showcase-description">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <a :href="url" class="btn btn-primary">Check it out</a>
        </div>
        <img :src="imageSrc" :alt="title" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Showcase",
    props: {
        // True if the image is left
        left: Boolean,
        // The title
        title: String,
        // The description
        description: String,
        // The image source for the preview
        imageSrc: String,
        // The url for the check it out button
        url: String,
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.showcase {
    display: flex;
    align-items: flex-start;
    margin-bottom: 64px;

    div {
        margin-right: 64px;
    }

    img {
        flex: 0 0 auto;
        width: 60%;
        border: 1px solid black;
    }
}

.showcase-left {
    div {
        order: 1;
        margin-left: 64px;
        margin-right: 0;
    }
}

.showcase-description {
    h2 {
        margin-bottom: 12px;
    }
}

@media screen and (max-width: 1000px) {
    .showcase {
        flex-direction: column;

        div {
            margin-right: 0;
        }

        img {
            margin-top: 32px;
            width: 100%;
        }
    }

    .showcase-left {
        div {
            order: 0;
            margin-left: 0;
        }
    }
}
</style>
