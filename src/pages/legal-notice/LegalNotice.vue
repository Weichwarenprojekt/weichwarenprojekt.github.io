<template>
    <div class="legal-notice">
        <h1>{{ $t("legalNotice.title") }}</h1>
        <div>
            <h2>Weichwarenprojekt GbR<br /></h2>
            <h3>{{ $t("legalNotice.representedBy") }}</h3>
            <p>
                Karl Wiesmayer <br />
                Philipp Scheede <br />
                Samuel Hübner <br />
                Stefan Rink <br />
                Tim Niederer<br />
            </p>
            <h3>{{ $t("legalNotice.postalAddress") }}</h3>
            <p>
                Hauptstraße 48<br />
                89614 Öpfingen
            </p>
            <h3>{{ $t("legalNotice.contact") }}</h3>
            <p>
                {{ $t("legalNotice.phone") }}: +49 171 2089964<br />
                {{ $t("legalNotice.email") }}: info@weichwarenprojekt.de
            </p>
            <h3>{{ $t("legalNotice.salesTaxID") }}</h3>
            <p>DE 351 786229</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "LegalNotice",
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.legal-notice {
    max-width: @max-width;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: @normal-padding;

    & > div {
        width: 100%;
        background: @grey;
        border-radius: @border-radius;
        padding: @normal-padding;

        *:last-child {
            padding-bottom: 0;
        }
    }

    h2,
    h3 {
        text-align: start;
    }

    .link {
        color: @prime-1;
    }
}
</style>
