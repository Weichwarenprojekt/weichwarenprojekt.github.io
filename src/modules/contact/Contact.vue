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
            <label for="name">* {{ $t("contact.name") }}</label>
            <input id="name" v-model="name" name="name" type="text" />
            <!-- Company -->
            <label for="company">{{ $t("contact.company") }}</label>
            <input id="company" v-model="company" name="company" type="text" />
            <!-- Email -->
            <label for="email">* {{ $t("contact.email") }}</label>
            <input id="email" v-model="email" name="email" type="text" />
            <!-- Message -->
            <label>* {{ $t("contact.message") }}</label>
            <textarea id="message" v-model="message" />

            <!-- Privacy Policy -->
            <div class="checkbox-field">
                <Checkbox v-model="privacyPolicyChecked"></Checkbox>
                <div>
                    * {{ $t("contact.privacy.first") }}
                    <router-link to="/data-protection"> {{ $t("contact.privacy.second") }}</router-link>
                    {{ $t("contact.privacy.third") }}
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <!-- Send Button -->
                <a :class="{ disabled: !sendAvailable }" class="btn btn-primary btn-icon" @click="sendEmail()">
                    <div v-if="loading" class="spinner">
                        <div class="spinner-bounce1"></div>
                        <div class="spinner-bounce2"></div>
                    </div>
                    <svg v-else>
                        <use :href="`${require('@/assets/img/icons.svg')}#email`"></use>
                    </svg>
                    {{ $t("contact.send") }}
                </a>

                <!-- Error Text -->
                <div class="contact-warning">
                    <svg v-if="error">
                        <use :href="`${require('@/assets/img/icons.svg')}#error`"></use>
                    </svg>
                    <div>{{ error }}</div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroCard from "@/components/IntroCard.vue";
import Checkbox from "@/components/Checkbox.vue";
import { ContactApiModel } from "../../../server/src/common/contact.api-model";

export default defineComponent({
    name: "Contact",
    components: {
        IntroCard,
        Checkbox,
    },
    data() {
        return {
            // Name of the user (mandatory)
            name: "",
            // Company name (optional)
            company: "",
            // E-Mail (mandatory)
            email: "",
            // The contact message
            message: "",
            // The shown error message
            error: "",
            // True if the form is currently loading
            loading: false,
            // True if the user agrees to the privacy policy
            privacyPolicyChecked: false,
        };
    },
    computed: {
        /**
         * True if the user filled the mandatory fields
         */
        sendAvailable(): boolean {
            return this.privacyPolicyChecked && this.name !== "" && this.email !== "" && this.message !== "";
        },
    },
    methods: {
        /**
         * Try to send an e-mail
         */
        sendEmail(): void {
            if (this.loading) return;

            // Check email
            if (!(this.email.includes("@") && this.email.includes("."))) {
                this.error = this.$t("contact.emailRequired");
                return;
            }

            // Send the email
            this.error = "";
            this.loading = true;
            fetch("http://localhost:8000/email/send", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(
                    new ContactApiModel(this.name, this.company, this.email, this.message, this.$i18n.locale),
                ),
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
                });
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

.checkbox-field {
    display: flex;
    margin-bottom: 2rem;
    align-items: center;

    div {
        font-size: @h3;
        text-align: start;
    }

    a {
        font-size: @h3;
        color: @prime-1;
    }
}

.contact-warning {
    display: flex;
    margin-left: 2rem;

    svg {
        width: 2rem;
        height: 2rem;
        fill: @prime-2;
        flex: 0 0 auto;
    }

    div {
        margin-left: 1rem;
        color: @prime-2;
        font-size: @h3;
    }
}

.footer {
    display: flex;
    align-items: center;
}

@media screen and (max-width: @mobile-breakpoint) {
    .contact-form {
        background: transparent;
        padding: 0;

        input,
        textarea {
            background: @grey;
        }
    }
}
</style>
