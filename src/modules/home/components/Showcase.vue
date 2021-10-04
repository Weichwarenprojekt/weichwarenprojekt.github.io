<template>
    <div class="showcase">
        <div class="showcase-info">
            <div class="showcase-title">
                <svg>
                    <use :href="`${require('@/assets/img/icons.svg')}#academy`"></use>
                </svg>
                <h2>{{ title }}</h2>
            </div>
            <div class="showcase-description">{{ description }}</div>
            <div>
                <a :href="url" class="btn btn-primary">
                    {{ $t("home.examples.visit") }}
                </a>
            </div>
        </div>
        <img :alt="title" :src="image" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Showcase",
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
            default: "",
        },
        url: {
            type: String,
            default: "https://google.com",
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.showcase {
    display: flex;
    align-items: flex-start;
    background: @grey;
    border-radius: @border-radius;
    padding: @normal-padding @big-padding;

    img {
        flex: 0 0 auto;
        width: 50%;
        border: 1px solid black;
        border-radius: @border-radius;
    }
}

.showcase-title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
        margin: 0;
    }

    svg {
        margin-right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
    }
}

.showcase-description {
    font-weight: 300;
    font-size: @h3;
    margin-right: @normal-padding;
    margin-bottom: 2rem;
}

@media screen and (max-width: 1000px) {
    .showcase {
        flex-direction: column;
        padding: @normal-padding;

        div {
            margin-right: 0;
        }

        img {
            margin-top: @normal-padding;
            width: 100%;
        }
    }
}
</style>
