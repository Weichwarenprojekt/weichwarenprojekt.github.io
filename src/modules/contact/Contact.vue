<template>
    <div class="contact">
        <!-- Intro -->
        <IntroCard
            :description="$t('contact.description')"
            :image="require('@/assets/img/contact/contact.svg')"
            :title="$t('contact.title')"
        />

        <!-- Contact form -->
        <h1 class="title">{{ $t("contact.submit") }}</h1>
        <form autocomplete="on" class="contact-form">
            <!-- First Name -->
            <label for="firstname">{{ $t("contact.firstName") }}</label>
            <input id="firstname" name="firstname" type="text" />
            <!-- Last Name -->
            <label for="lastname">{{ $t("contact.lastName") }}</label>
            <input id="lastname" name="lastname" type="text" />
            <!-- Email -->
            <label for="name">{{ $t("contact.email") }}</label>
            <input id="name" name="name" type="text" />
            <!-- Message -->
            <label>{{ $t("contact.message") }}</label>
            <textarea id="message" />

            <!-- Footer -->
            <div class="footer">
                <a class="btn btn-primary btn-icon">
                    <svg>
                        <use :href="`${require('@/assets/img/icons.svg')}#email`"></use>
                    </svg>
                    {{ $t("contact.send") }}
                </a>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroCard from "@/components/IntroCard.vue";

export default defineComponent({
    name: "Contact",
    components: {
        IntroCard,
    },
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
    margin-top: @header-height;
}

.contact-form {
    width: 100%;
    background: @grey;
    border-radius: @border-radius;
    padding: @big-padding;

    label {
        margin-right: @border-radius;
        font-size: @h3;
    }

    input,
    textarea {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    textarea {
        height: 20rem;
    }
}

.footer {
    display: flex;
    justify-content: flex-end;
}

@media screen and (max-width: @mobile-breakpoint) {
    .contact-form {
        background: transparent;
        padding: 0;
        text-align: center;

        input,
        textarea {
            background: @grey;
        }
    }
}
</style>
