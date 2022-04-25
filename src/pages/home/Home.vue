<template>
    <div class="home">
        <!-- Intro -->
        <h1 class="first-title">Weichwarenprojekt</h1>
        <h1 class="second-title">{{ $t("home.intro.subtitle") }}</h1>
        <Intro class="intro" />

        <!-- Focus -->
        <h1 class="title">{{ $t("home.focus.title") }}</h1>
        <div class="home-focus">
            <div class="home-focus-block">
                <FocusCard
                    :description="$t('home.focus.user.description')"
                    :image="require('@/assets/img/home/focus/user.svg')"
                    :title="$t('home.focus.user.title')"
                    class="home-focus-first"
                />
                <FocusCard
                    :description="$t('home.focus.design.description')"
                    :image="require('@/assets/img/home/focus/design.svg')"
                    :title="$t('home.focus.design.title')"
                />
            </div>
            <FocusCard
                :description="$t('home.focus.portfolio.description')"
                :image="require('@/assets/img/home/focus/portfolio.svg')"
                :title="$t('home.focus.portfolio.title')"
                class="home-focus-single"
            />
        </div>

        <!-- Questions -->
        <h1 class="title">{{ $t("home.questions.title") }}</h1>
        <Question :question="$t('home.questions.question1')" class="spacing-bottom">
            <div v-html="$t('home.questions.answer1')"></div>
            <router-link
                class="btn btn-primary spacing-top"
                target="_blank"
                to="/contact"
                @click="$event.stopPropagation()"
            >
                {{ $t("home.questions.toContact") }}
            </router-link>
        </Question>
        <Question :question="$t('home.questions.question2')" class="spacing-bottom">
            <div v-html="$t('home.questions.answer2')"></div>
        </Question>
        <Question :question="$t('home.questions.question3')">
            <div v-html="$t('home.questions.answer3')"></div>
            <router-link
                class="btn btn-primary spacing-top"
                target="_blank"
                to="/team"
                @click="$event.stopPropagation()"
            >
                {{ $t("home.questions.ourTeam") }}
            </router-link>
        </Question>

        <!-- Examples -->
        <h1 class="title">{{ $t("home.examples.title") }}</h1>
        <Showcase
            :description="$t('home.examples.granalyzer.description')"
            :image="require('@/assets/img/home/examples/granalyzer.png')"
            :title="$t('home.examples.granalyzer.title')"
            class="spacing-bottom-big"
            url="https://weichwarenprojekt.github.io/granalyzer/"
        />
        <Showcase
            :description="$t('home.examples.assembus.description')"
            :image="require('@/assets/img/home/examples/assembus.png')"
            :title="$t('home.examples.assembus.title')"
            url="https://weichwarenprojekt.github.io/assembus/"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/pages/home/components/Intro.vue";
import Showcase from "@/pages/home/components/Showcase.vue";
import FocusCard from "@/pages/home/components/FocusCard.vue";
import Question from "@/pages/home/components/Question.vue";

export default defineComponent({
    name: "Home",
    components: { Intro, Question, Showcase, FocusCard },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.home {
    max-width: @max-width;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.first-title {
    margin-bottom: 0.5rem;
    text-align: center;
    margin-top: @normal-padding;
}

.second-title {
    color: @prime-1;
    font-size: @h3;
    text-align: center;
}

@supports (-webkit-background-clip: text) {
    .second-title {
        background-image: @gradient;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.intro {
    margin-top: 2rem;
    height: auto;
    max-height: 65vh;
    width: auto;
}

.home-focus {
    display: flex;
    justify-content: space-between;
}

.home-focus-block {
    display: flex;
    width: 65%;
    flex: 0 0 auto;
    justify-content: space-between;

    & > * {
        width: 46.24%;
    }
}

.home-focus-single {
    width: 30%;
    flex: 0 0 auto;
}

@media screen and (max-width: 900px) {
    .home-focus {
        align-items: center;
    }

    .home-focus-block {
        flex-direction: column;
        width: 46%;

        & > * {
            width: 100%;
        }
    }

    .home-focus-first {
        margin-bottom: 3rem;
    }

    .home-focus-single {
        width: 46%;
    }
}

@media screen and (max-width: @mobile-breakpoint) {
    .home-focus {
        flex-direction: column;
    }

    .home-focus-block {
        width: 100%;
    }

    .home-focus-single {
        margin-top: 3rem;
        width: 100%;
    }
}
</style>
