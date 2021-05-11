<template>
    <div :class="['header', { 'header-toggled': toggled }]">
        <div class="header-content">
            <!-- The logo -->
            <img src="../assets/img/logo.svg" alt="" />

            <!-- The nav links -->
            <div class="links">
                <router-link to="/home">Home</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>

            <!-- The toggle button -->
            <button
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                :class="['navbar-toggle', { 'navbar-toggled': toggled }]"
                @click="toggled = !toggled"
            >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>

        <!-- The links expanded -->
        <div class="links-toggled">
            <router-link to="/home" @click="toggled = false">Home</router-link>
            <router-link to="/contact" @click="toggled = false">Contact</router-link>
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
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.header {
    height: @header-height;
    max-width: @max-width;
    width: 100%;
    background: white;
    transition: all 300ms;
    overflow: hidden;

    img {
        height: 48px;
        margin-right: 64px;
    }
}

.header-content {
    height: @header-height;
    display: flex;
    align-items: center;
}

.links {
    display: flex;
    flex-direction: row;

    * {
        font-size: @h3;
        margin-right: 16px;
    }
}

.links-toggled {
    position: absolute;
    top: @header-height;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2 * @mobile-outer-padding);
    height: calc(100vh - 2 * @header-height);

    * {
        font-size: @h1;
        margin-bottom: 16px;
    }
}

// The toggle
.navbar-toggle {
    border: none;
    background: transparent !important;
    outline: none;
    position: absolute;
    right: 16px;
    display: none;
    cursor: pointer;
}
@media screen and (max-width: @mobile-breakpoint) {
    .navbar-toggle {
        display: block;
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
