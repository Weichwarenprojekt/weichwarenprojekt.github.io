<template>
    <div class="contact">
        <img src="@/assets/img/contact/undraw_work_in_progress_uhmv.svg" alt="Work In Progress" />
        <h3>Coming soon...</h3>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 128px;

    img {
        max-width: 600px;
        width: 100%;
    }

    h3 {
        margin-top: 24px;
    }
}
</style>
