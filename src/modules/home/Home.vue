<template>
    <div class="home">
        <FirstGlance />
        <AboutUs />
        <h1>Showcase</h1>
        <Showcase
            :left="true"
            title="Granalyzer"
            description="This diagramming tool allows you to create and visualize graphs of elements and their relations to each
            other. As you can reuse elements in multiple diagrams, creating those visualizations becomes remarkably
            fast."
            url="https://weichwarenprojekt.github.io/granalyzer/"
            :image-src="require('@/assets/img/granalyzer.png')"
        />
        <Showcase
            :left="false"
            title="Assembus"
            description="Optimize and plan your manufacturing line. With Assembus you get an extensive tool to visualize the
                    assembly process of complex products in 3D. Therefore, you can spread the individual steps over
                    different stations and in the end, pass the whole process in review with the Cinema Mode."
            url="https://weichwarenprojekt.github.io/granalyzer/"
            :image-src="require('@/assets/img/assembus.png')"
        />
        <Showcase
            :left="true"
            title="Multi-Bomb"
            description="This project is a multiplayer version of the classic game Bomberman.
              In Multi-Bomb up to 8 players can compete on a map consisting of quadratic fields.
              Within different game modes they can try to eliminate each other using a variety of deadly weapons."
            url="https://weichwarenprojekt.github.io/multi-bomb/"
            :image-src="require('@/assets/img/multi_bomb.png')"
        />
        <div class="stay-tuned">
            <img src="@/assets/img/undraw_programmer_imem.svg" alt="Stay tuned" />
            <h3>Stay tuned for more...</h3>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstGlance from "./components/FirstGlance.vue";
import AboutUs from "./components/AboutUs.vue";
import Showcase from "./components/Showcase.vue";

export default defineComponent({
    name: "Home",
    components: { Showcase, AboutUs, FirstGlance },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.home {
    max-width: @max-width;
    width: 100%;
}

.stay-tuned {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 192px;

    img {
        max-width: 600px;
        width: 100%;
    }

    h3 {
        margin-top: 24px;
    }
}
</style>
