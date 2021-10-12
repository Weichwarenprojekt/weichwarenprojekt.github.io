<template>
    <div class="data-protection" v-html="$t('dataProtection.text')"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DataProtection",
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.data-protection {
    max-width: @max-width;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: @normal-padding;
}
</style>
