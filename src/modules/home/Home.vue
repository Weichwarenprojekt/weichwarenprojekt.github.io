<template>
    <div class="home">
        <!-- Intro -->
        <h1 class="title">{{ $t("home.intro.title") }}</h1>
        <div class="home-intro">
            <div class="home-questions">
                <div class="home-question1 message-box message-box-right">{{ $t("home.intro.question1") }}</div>
                <div class="home-question2 message-box message-box-right">{{ $t("home.intro.question2") }}</div>
                <div class="home-question3 message-box message-box-right">{{ $t("home.intro.question3") }}</div>
            </div>
            <img alt="Image" src="@/assets/img/home/intro.svg" />
            <div class="home-questions-mobile">
                <div class="home-question1 message-box message-box-left">{{ $t("home.intro.question1") }}</div>
                <div class="home-question2 message-box message-box-right">{{ $t("home.intro.question2") }}</div>
                <div class="home-question3 message-box message-box-left">{{ $t("home.intro.question3") }}</div>
            </div>
        </div>

        <!-- Answer -->
        <h1 class="title">{{ $t("home.answer.title") }}</h1>
        <div class="home-answer">
            <img alt="Image" src="@/assets/img/home/answer.svg" />
            <div class="message-box message-box-left">{{ $t("home.answer.description") }}</div>
        </div>

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
        <Question :question="$t('home.questions.question1')">
            <div :innerHTML="$t('home.questions.answer1')"></div>
            <router-link class="btn btn-primary spacing-top" to="/contact" @click="scrollToTop">
                {{ $t("home.questions.toContact") }}
            </router-link>
        </Question>
        <Question :question="$t('home.questions.question2')">
            <div :innerHTML="$t('home.questions.answer2')"></div>
        </Question>
        <Question :question="$t('home.questions.question3')">
            <div :innerHTML="$t('home.questions.answer3')"></div>
            <router-link class="btn btn-primary spacing-top" to="/team" @click="scrollToTop">
                {{ $t("home.questions.ourTeam") }}
            </router-link>
        </Question>

        <!-- Examples -->
        <h1 class="title">{{ $t("home.examples.title") }}</h1>
        <Showcase
            :description="$t('home.examples.granalyzer.description')"
            :image="require('@/assets/img/home/examples/granalyzer.png')"
            :title="$t('home.examples.granalyzer.title')"
            class="home-granalyzer"
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
import Showcase from "@/modules/home/components/Showcase.vue";
import FocusCard from "@/modules/home/components/FocusCard.vue";
import Question from "@/modules/home/components/Question.vue";

export default defineComponent({
    name: "Home",
    components: { Question, Showcase, FocusCard },
    methods: {
        /**
         * Scroll the window to the top
         */
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
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

.message-box {
    background: @grey;
    border-radius: @border-radius;
    padding: 1rem @small-padding;
    font-size: @text;
    font-weight: 300;
    position: relative;
}

.message-box-right::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 0.8rem solid @grey;
    border-bottom: 0.6rem solid transparent;
    border-top: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    position: absolute;
    top: 1rem;
    left: 100%;
}

.message-box-left::before {
    content: "";
    width: 0;
    height: 0;
    border-right: 0.8rem solid @grey;
    border-bottom: 0.6rem solid transparent;
    border-top: 0.6rem solid transparent;
    border-left: 0.6rem solid transparent;
    position: absolute;
    top: 1rem;
    right: 100%;
}

.home-intro {
    display: flex;
    align-items: center;
    margin-top: @normal-padding;
    margin-bottom: @big-padding;

    img {
        width: 55%;
        margin-left: 6rem;
        flex: 0 0 auto;
    }
}

.home-questions-mobile {
    display: none;
}

.home-question1 {
    margin-left: 5rem;
    margin-right: 2rem;
    margin-bottom: 4rem;
}

.home-question2 {
    margin-right: 10rem;
}

.home-question3 {
    margin-left: 8rem;
    margin-top: 5rem;
}

.home-answer {
    display: flex;
    align-items: center;
    margin-top: @normal-padding;
    margin-bottom: @big-padding;

    img {
        width: 55%;
        margin-right: 6rem;
        flex: 0 0 auto;
    }
}

@media screen and (max-width: 750px) {
    .home-intro {
        flex-direction: column;

        img {
            margin-left: 0;
            margin-bottom: 4rem;
        }
    }

    .home-questions {
        display: none;
    }

    .home-questions-mobile {
        display: flex;
        flex-direction: column;
    }

    .home-answer {
        flex-direction: column;

        img {
            margin-right: 0;
            margin-bottom: 4rem;
        }

        & > div {
            width: 20rem;
        }
    }
}

@media screen and (max-width: @mobile-breakpoint) {
    .home-intro,
    .home-answer {
        img {
            width: 100%;
        }
    }
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

.home-granalyzer {
    margin-bottom: @normal-padding;
}
</style>
