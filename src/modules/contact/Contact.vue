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
            <label for="name">{{ $t("contact.name") }}</label>
            <input id="name" v-model="name" name="name" type="text" />
            <!-- Email -->
            <label for="email">{{ $t("contact.email") }}</label>
            <input id="email" v-model="email" name="email" type="text" />
            <!-- Message -->
            <label>{{ $t("contact.message") }}</label>
            <textarea id="message" v-model="message" />

            <!-- Footer -->
            <div class="footer">
                <div class="contact-warning">
                    <svg v-if="error">
                        <use :href="`${require('@/assets/img/icons.svg')}#error`"></use>
                    </svg>
                    <div>{{ error }}</div>
                </div>
                <a class="btn btn-primary btn-icon" @click="sendEmail()">
                    <div v-if="loading" class="spinner">
                        <div class="spinner-bounce1"></div>
                        <div class="spinner-bounce2"></div>
                    </div>
                    <svg v-else>
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
    data() {
        return {
            name: "",
            email: "",
            message: "",
            error: "",
            loading: false,
        };
    },
    methods: {
        /**
         * Try to send an e-mail
         */
        sendEmail(): void {
            if (this.loading) return;

            // Check name
            if (!this.name) {
                this.error = this.$t("contact.nameRequired");
                return;
            }

            // Check email
            if (!(this.email.includes("@") && this.email.includes("."))) {
                this.error = this.$t("contact.emailRequired");
                return;
            }

            // Check first name
            if (!this.message) {
                this.error = this.$t("contact.messageRequired");
                return;
            }

            // Send the email
            this.error = "";
            /*this.loading = true;
            fetch("https://api.weichwarenprojekt.de/v1/email/send", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }),
            })
                .then((res) => {
                    if (res.status >= 300) {
                        this.error = this.$t("contact.couldNotSend");
                    } else {
                        this.message = "";
                    }
                    this.loading = false;
                })
                .catch(() => {
                    this.error = this.$t("contact.couldNotSend");
                    this.loading = false;
                });*/
        },
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
    margin-top: @normal-padding;
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

.contact-warning {
    display: flex;
    margin-right: 2rem;

    svg {
        width: 2rem;
        height: 2rem;
        fill: @prime-2;
    }

    div {
        margin-left: 1rem;
        color: @prime-2;
        font-size: @h3;
    }
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
