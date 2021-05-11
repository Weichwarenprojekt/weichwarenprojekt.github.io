<template>
    <div class="contact">
        <h2>This is a contact page</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Contact",
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.contact {
    max-width: @max-width;
    width: 100%;
}
</style>
