<template>
    <div class="third-party">
        <h1>{{ $t("global.footer.thirdParty") }}</h1>
        <div class="license" v-for="license of this.licenses" :key="license.name">
            <a target="_blank" :href="license.link">{{ license.name }}</a>
            <pre>{{ license.license }}</pre>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import licenses from "./licenses.json";

export default defineComponent({
    name: "ThirdParty",
    data() {
        return {
            licenses,
        };
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.third-party {
    max-width: @max-width;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: @normal-padding;
}

.license {
    width: 100%;
    background: @grey;
    border-radius: @border-radius;
    padding: @normal-padding;
    margin-bottom: @normal-padding;

    &:last-child {
        margin-bottom: 0;
    }

    a {
        color: @prime-1;
        font-size: @h2;
        font-weight: 500;
    }

    pre {
        margin-top: 1.5rem;
        font-weight: 300;
        overflow: auto;
        max-height: 50rem;
    }
}
</style>
