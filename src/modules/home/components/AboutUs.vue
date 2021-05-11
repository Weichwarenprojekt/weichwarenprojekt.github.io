<template>
    <h1>About Us</h1>
    <div class="about-us">
        <div>
            <p>
                We are a group of eight ambitious computer science students from the University of Applied Sciences Ulm.
            </p>
            <p>
                With Weichwarenprojekt we want to share projects we've done during our studies and in our spare time. We
                gathered a wide range of expertises in different technologies, e.g. TypeScript, C# or Unity and don't
                turn our backs on new challenges.
            </p>
            <p>
                Our goal for every single project is to deliver the best possible user experience with simple structured
                UIs and intuitive controls. You don't trust us? Then try our showcase projects below!
            </p>
        </div>
        <img src="@/assets/img/undraw_feeling_proud_qne1.svg" alt="About Us" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AboutUs",
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.about-us {
    display: flex;
    align-items: flex-start;
    margin-bottom: 128px;

    div {
        margin-right: 64px;
    }

    img {
        flex: 0 0 auto;
        width: 40%;
    }
}

@media screen and (max-width: @first-glance-width + 2 * @outer-padding) {
    .about-us {
        flex-direction: column;
        align-items: center;

        div {
            margin-right: 0;
        }

        img {
            width: 100%;
            max-width: 500px;
        }
    }
}
</style>
