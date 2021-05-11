<template>
    <div class="app">
        <Header class="header" />
        <router-view class="content" />
    </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { Header },
});
</script>

<style lang="less">
@import "styles/global";

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    position: fixed;
    top: 0;
    z-index: 100;
    padding: 0 @outer-padding;
}

.content {
    padding: @header-height @outer-padding;
}

@media screen and (max-width: 500px) {
    .content {
        padding: @header-height 16px;
    }

    .header {
        padding: 0 16px;
    }
}
</style>
