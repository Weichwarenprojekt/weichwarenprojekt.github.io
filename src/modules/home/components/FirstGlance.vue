<template>
    <div class="first-glance">
        <div class="abstract-intro">
            <span class="we-are">We are</span>
            <div class="name-container">
                <span ref="randomSlogan" class="random-slogan">a bunch of coders</span>
                <span class="name">Weichwarenprojekt</span>
            </div>
        </div>
        <a class="btn btn-icon btn-primary" href="https://github.com/Weichwarenprojekt">
            <svg>
                <use :xlink:href="`${require('@/assets/img/icons.svg')}#si-oct-mark-github`"></use>
            </svg>
            Github
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import gsap from "gsap";

let randomStrings = [
    "a bunch of coders",
    "progresstinating",
    "in coderausch",
    "rewriting history",
    "home officers",
    "two commits ahead",
];

export default defineComponent({
    name: "FirstGlance",
    mounted() {
        // Show random string
        let randomIndex = Math.floor(Math.random() * randomStrings.length);
        (this.$refs.randomSlogan as HTMLElement).innerHTML = randomStrings[randomIndex];

        // Start the animation
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.to("span.random-slogan", { y: "0%", duration: 0.5 });
        tl.to("span.random-slogan", { y: "-100%", duration: 0.5, delay: 1.5 });
        tl.to("span.name", { y: "-100%", duration: 0.5 }, "-=.5");
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

@content-height-big: 96px;
@content-height-small: 48px;

.first-glance {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16vh 0;
}

.abstract-intro {
    text-align: center;
    position: relative;
    border: 8px solid;
    border-image-source: linear-gradient(45deg, @prime-1, @prime-2);
    border-image-slice: 1;
    padding: 24px;
    width: @first-glance-width;
    margin-top: 36px;

    * {
        font-size: 64px;
    }
}

.btn {
    padding: 10px 32px;
    margin-top: 32px;
}

.we-are {
    left: 148px;
    top: -64px;
    position: absolute;
    width: 100%;
}

.name-container {
    overflow: hidden;
    height: @content-height-big;
}

.name,
.random-slogan {
    transform: translateY(100%);
    display: inline-block;
    height: @content-height-big;
    line-height: @content-height-big;
    width: 100%;
    white-space: nowrap;
}

@media screen and (max-width: @first-glance-width + 2 * @outer-padding) {
    .first-glance {
        margin: 12vh 0;
    }

    .abstract-intro {
        font-size: 2rem;
        width: auto;
        max-width: 420px;

        * {
            font-size: 32px;
        }
    }

    .we-are {
        top: -54px;
        left: 0;
        right: 0;
        text-align: center;
    }

    .name-container {
        height: @content-height-small;
    }

    .name,
    .random-slogan {
        height: @content-height-small;
        line-height: @content-height-small;
    }
}

@media screen and (max-width: 380px) {
    .abstract-intro * {
        font-size: 24px;
    }
}
</style>
