<template>
    <h1>{{ $t("global.footer.title") }}</h1>
    <div class="footer">
        <div class="footer-card">
            <img alt="Address" src="@/assets/img/footer/address.svg" />
            <div>
                <h2>{{ $t("global.footer.contact") }}</h2>
                <a target="_blank" href="https://goo.gl/maps/ijhgpVfHhQ71StqK7">
                    Weichwarenprojekt GbR <br />
                    Hauptstraße 48 <br />
                    89614 Öpfingen <br />
                </a>
                <a href="mailto:info@weichwarenprojekt.de">info@weichwarenprojekt.de</a>
            </div>
        </div>
        <div class="footer-card">
            <img alt="Address" src="@/assets/img/footer/pages.svg" />
            <div>
                <h2>{{ $t("global.footer.pages") }}</h2>
                <router-link to="/contact">{{ $t("global.footer.contact") }}<br /></router-link>
                <router-link to="/data-protection">{{ $t("global.footer.privacyPolicy") }}<br /></router-link>
                <router-link to="/legal-notice">{{ $t("global.footer.legalNotice") }}<br /></router-link>
                <router-link to="/third-party">{{ $t("global.footer.thirdParty") }}</router-link>
            </div>
        </div>
        <div class="footer-card">
            <img alt="Address" src="@/assets/img/footer/social-media.svg" />
            <div>
                <h2>{{ $t("global.footer.socialMedia") }}</h2>
                <div class="link-with-image">
                    <svg>
                        <use :href="`${require('@/assets/img/icons.svg')}#linkedin`"></use>
                    </svg>
                    <a target="_blank" href="https://www.linkedin.com/company/weichwarenprojekt/">LinkedIn</a>
                </div>
                <div class="link-with-image">
                    <svg>
                        <use :href="`${require('@/assets/img/icons.svg')}#instagram`"></use>
                    </svg>
                    <a target="_blank" href="https://www.instagram.com/weichwarenprojekt/">Instagram</a>
                </div>
                <div class="link-with-image">
                    <svg>
                        <use :href="`${require('@/assets/img/icons.svg')}#github`"></use>
                    </svg>
                    <a target="_blank" href="https://github.com/Weichwarenprojekt">GitHub</a>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">© Weichwarenprojekt GbR 2022</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Footer",
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

@gap: @normal-padding / 2;

.footer {
    width: 100%;
    max-width: @max-width;
    display: flex;
    flex-wrap: wrap;
    margin: -@gap 0;
    padding: 0 @gap;
}

.copyright {
    margin: @normal-padding;
    opacity: @opacity;
}

.footer-card {
    flex: 1 1 auto;
    padding: @normal-padding;
    background: @grey;
    border-radius: @border-radius;
    display: flex;
    align-items: center;
    margin: @gap;
    overflow: hidden;

    & > img {
        width: 12rem;
        height: 12rem;
        margin-right: @normal-padding;
        flex: 0 1 auto;
        min-width: 0;
        min-height: 0;
    }

    & > div {
        flex: 1 0 auto;

        h2 {
            text-align: start;
        }
    }
}

.social-media {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.link-with-image {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    svg,
    img {
        margin-right: 0.75rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    &:last-child {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 400px) {
    .footer-card {
        flex-direction: column;

        & > div {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
}
</style>
