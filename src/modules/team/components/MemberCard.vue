<template>
    <div class="member-card">
        <!-- The image -->
        <img :src="image" alt="Member Image" class="member-image" />

        <!-- Information -->
        <div class="member-info">
            <!-- Name -->
            <h2>{{ name }}</h2>

            <!-- Quote -->
            <div class="member-quote">"{{ quote }}"</div>

            <!-- Degree -->
            <a class="member-token single-token" href="https://studium.hs-ulm.de/de/Seiten/Homepage.aspx">
                <svg>
                    <use :href="`${require('@/assets/img/icons.svg')}#academy`"></use>
                </svg>
                <div>{{ degree }}</div>
            </a>

            <!-- Accounts -->
            <div class="member-accounts">
                <!-- GitHub -->
                <a v-if="github" class="member-token" :href="github">
                    <svg>
                        <use :href="`${require('@/assets/img/icons.svg')}#github`"></use>
                    </svg>
                    <div>GitHub</div>
                </a>

                <!-- LinkedIn -->
                <a class="member-token" :href="linkedin">
                    <svg>
                        <use :href="`${require('@/assets/img/icons.svg')}#linkedin`"></use>
                    </svg>
                    <div>LinkedIn</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MemberCard",
    props: {
        image: {
            type: String,
            default: require("@/assets/img/team/user.png"),
        },
        name: {
            type: String,
            default: "Name",
        },
        quote: {
            type: String,
            default: "Quote",
        },
        degree: {
            type: String,
            default: "Bachelor Of Art",
        },
        github: {
            type: String,
            default: "",
        },
        linkedin: {
            type: String,
            default: "https://www.linkedin.com/",
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

@image-width: 14rem;

.member-card {
    padding: @normal-padding @big-padding;
    border-radius: @border-radius;
    background: @grey;
    display: flex;
    width: 100%;
    align-items: center;
}

.member-image {
    border: 0.2rem solid @prime-1;
    border-radius: @image-width;
    width: @image-width;
    height: @image-width;
}

.member-info {
    flex: 1 1 auto;
    margin-left: @big-padding;
}

.member-quote {
    font-weight: 300;
    font-style: italic;
    font-size: @h3;
    margin-bottom: 3rem;
}

.member-token {
    display: flex;
    align-items: center;
    margin-right: 2rem;

    div {
        margin-top: 0.2rem;
    }

    svg {
        margin-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        flex: 0 0 auto;
    }
}

.member-accounts {
    display: flex;
    margin-top: 0.7rem;
}

@media screen and (max-width: @mobile-breakpoint) {
    .member-card {
        flex-direction: column;
        align-items: center;
    }
    .member-image {
        margin-bottom: @normal-padding;
    }
    .member-info {
        margin-left: 0;
        align-items: center;
        text-align: center;
    }
    .member-accounts {
        justify-content: center;
    }
    .single-token {
        width: 100%;
        justify-content: center;
    }
}
</style>
