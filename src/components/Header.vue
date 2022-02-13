<template>
    <div :class="['header', { 'header-toggled': toggled }]">
        <div class="header-content">
            <!-- The logo -->
            <img alt="" src="../assets/img/logo.svg" />

            <!-- The nav links -->
            <div class="links">
                <router-link to="/home">{{ $t("global.home") }}</router-link>
                <router-link to="/team">{{ $t("global.team") }}</router-link>
                <router-link to="/contact">{{ $t("global.contact") }}</router-link>
            </div>

            <!-- The toggle button -->
            <button
                :class="['navbar-toggle', { 'navbar-toggled': toggled }]"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggled = !toggled"
            >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="info-mail" href="mailto:info@weichwarenprojekt.de">info@weichwarenprojekt.de</a>
        </div>

        <!-- The links expanded -->
        <div class="links-toggled">
            <router-link to="/home">{{ $t("global.home") }}</router-link>
            <router-link to="/team">{{ $t("global.team") }}</router-link>
            <router-link to="/contact">{{ $t("global.contact") }}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Header",
    data() {
        return {
            toggled: false,
        };
    },
    watch: {
        /**
         * Hide navigation if route changes
         */
        $route() {
            this.toggled = false;
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.header::before {
    content: "";
    height: 0.3rem;
    width: 100%;
    position: absolute;
    top: 0;
    background: @gradient;
}

.header {
    height: @header-height;
    width: 100%;
    background: white;
    transition: all 300ms;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding-top: 0.3rem;

    img {
        height: 3rem;
        margin-right: 4rem;
    }
}

.header-content {
    padding: 0 @outer-padding;
    height: @header-height;
    max-width: @max-width;
    width: 100%;
    display: flex;
    align-items: center;
}

.links {
    display: flex;
    flex-direction: row;

    * {
        font-size: @h3;
        margin-right: 32px;
    }
}

.links-toggled {
    position: absolute;
    top: @header-height;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2 * @outer-padding);
    height: calc(100vh - 2 * @header-height);

    * {
        font-size: @h1;
        margin-bottom: 16px;
    }
}

// The info field
.info-mail {
    margin-left: auto;
    font-size: @text;
}

// The toggle
.navbar-toggle {
    border: none;
    background: transparent !important;
    margin-left: auto;
    outline: none;
    display: none;
    cursor: pointer;
}

@media screen and (max-width: @mobile-breakpoint) {
    .navbar-toggle {
        display: block;
    }

    .info-mail {
        display: none;
    }

    .links {
        display: none;
    }

    .header-toggled {
        height: 100vh;
    }
}

// The toggle style
.icon-bar {
    background-color: black;
    width: 22px;
    height: 2px;
    display: block;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    margin-top: 4px;
    background-image: linear-gradient(45deg, @prime-1, @prime-2);
    background-size: 10000px 4px;
    background-repeat: no-repeat;
    background-position: -10000px 4.5rem;
}

.icon-bar:nth-of-type(1) {
    margin-top: 0;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 10% 10%;
    -ms-transform-origin: 10% 10%;
    transform-origin: 10% 10%;
}

.icon-bar:nth-of-type(2) {
    opacity: 1;
    filter: alpha(opacity=100);
}

.icon-bar:nth-of-type(3) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 10% 90%;
    -ms-transform-origin: 10% 90%;
    transform-origin: 10% 90%;
}

.navbar-toggled {
    .icon-bar:nth-of-type(1) {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .icon-bar:nth-of-type(2) {
        margin-top: 4px;
        opacity: 0;
        filter: alpha(opacity=0);
    }

    .icon-bar:nth-of-type(3) {
        margin-top: 4px;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
}
</style>
