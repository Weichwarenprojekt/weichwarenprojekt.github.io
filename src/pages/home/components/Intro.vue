<template>
    <svg fill="none" height="347" viewBox="0 0 436 347" width="436" xmlns="http://www.w3.org/2000/svg">
        <!-- WP gradient -->
        <defs>
            <linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="282.051"
                x2="150.598"
                y1="169.326"
                y2="111.948"
            >
                <stop stop-color="#D62828" />
                <stop offset="1" stop-color="#F77F00" />
            </linearGradient>
        </defs>
        <!-- Monitor Case -->
        <g id="monitor-case">
            <g id="monitor-stand">
                <path
                    id="Vector"
                    d="M275.061 346.325L162.585 344.884L162.913 341.995L168.354 294.337H267.126L274.398 341.995L274.953 345.604L275.061 346.325Z"
                    fill="#D0D2D5"
                />
                <path
                    id="Vector_2"
                    d="M274.953 345.604H218.82L162.585 344.884L162.913 341.995H274.398L274.953 345.604Z"
                    fill="black"
                    opacity="0.1"
                />
                <path id="Vector_3" d="M293.088 342.715H143.838V346.325H293.088V342.715Z" fill="#D0D2D5" />
                <path
                    id="Vector_4"
                    d="M229.639 297.586L274.511 342.715L267.625 297.586H229.639Z"
                    fill="black"
                    opacity="0.1"
                />
            </g>
            <rect id="monitor-frame" fill="#D0D2D5" height="299" rx="10" width="436" />
            <g id="monitor-button" @click="toggleMonitor()">
                <circle id="monitor-button-background" cx="220" cy="273" fill="black" r="10" />
                <path
                    id="monitor-button-power"
                    clip-rule="evenodd"
                    d="M220.5 265H219.5V272H220.5V265ZM215.381 271.086C215.802 270.07 216.547 269.22 217.5 268.67L217 267.804C215.856 268.464 214.962 269.484 214.457 270.704C213.951 271.924 213.863 273.277 214.204 274.553C214.546 275.828 215.299 276.956 216.347 277.76C217.395 278.564 218.679 279 219.999 279C221.32 279 222.604 278.564 223.652 277.761C224.7 276.957 225.453 275.83 225.795 274.554C226.137 273.278 226.049 271.925 225.544 270.705C225.038 269.485 224.145 268.465 223.001 267.804L222.501 268.67C223.454 269.221 224.199 270.071 224.62 271.087C225.041 272.104 225.114 273.232 224.829 274.295C224.544 275.358 223.917 276.297 223.043 276.967C222.17 277.637 221.1 278 219.999 278C218.899 278 217.829 277.637 216.956 276.967C216.083 276.296 215.455 275.357 215.17 274.294C214.885 273.231 214.959 272.103 215.381 271.086Z"
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                />
            </g>
        </g>

        <!-- Monitor Display -->
        <g id="monitor-display">
            <rect id="monitor-background" fill="#000000" height="231" width="404" x="16" y="16" />
            <g id="monitor-console" opacity="1">
                <text
                    v-for="(line, i) of terminalLines"
                    :id="'monitor-console-line-' + i"
                    :key="i"
                    :y="40 + i * 16"
                    fill-opacity="0"
                    x="32"
                >
                    <tspan fill="white">[</tspan>
                    <tspan fill="green">&#160;OK&#160;</tspan>
                    <tspan fill="white">]&#160;</tspan>
                    <tspan
                        v-for="(char, j) of line"
                        :id="'monitor-console-line-' + i"
                        :key="j"
                        fill="white"
                        fill-opacity="0"
                    >
                        {{ char }}
                    </tspan>
                </text>
            </g>
            <text
                id="monitor-logo"
                dominant-baseline="middle"
                fill="url(#gradient)"
                opacity="0"
                text-anchor="middle"
                x="52%"
                y="40%"
            >
                wp
            </text>
            <svg id="monitor-slogan" opacity="0" x="50%" y="52%">
                <text dominant-baseline="middle" text-anchor="middle">{{ $t("home.intro.slogan1") }}</text>
                <text dominant-baseline="middle" text-anchor="middle" y="5%">{{ $t("home.intro.slogan2") }}</text>
            </svg>
            <rect id="monitor-standby" fill="#000000" height="231" opacity="0" width="404" x="16" y="16" />
        </g>
    </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import anime from "animejs";

/**
 * The possible lines from which one is picked to be shown on "pc startup"
 */
const possibleLines = [
    "home.intro.console.mid.0",
    "home.intro.console.mid.1",
    "home.intro.console.mid.2",
    "home.intro.console.mid.3",
];

export default defineComponent({
    name: "Intro",
    data() {
        return {
            // True if the display is powered on
            powered: true,
            // The lines shown in the terminal
            terminalLines: [
                this.$t("home.intro.console.start"),
                this.$t(possibleLines[anime.random(0, possibleLines.length - 1)]),
                this.$t("home.intro.console.end"),
            ],
        };
    },
    mounted() {
        // Start the animation with 1s delay
        const timeline = anime.timeline({
            easing: "easeOutExpo",
        });
        timeline.add({ duration: 1000 });

        // Print console and hide it afterwards
        for (let i = 0; i < this.terminalLines.length; i++) {
            timeline.add(
                {
                    targets: `#monitor-console-line-${i}`,
                    duration: 1,
                    // Fill opacity necessary for Firefox...
                    "fill-opacity": 1,
                    delay: anime.stagger(15),
                },
                `+=400`,
            );
        }
        timeline.add(
            {
                targets: "#monitor-console",
                duration: 1,
                opacity: 0,
            },
            "+=1000",
        );

        // WP start animation
        timeline.add({
            targets: "#monitor-background",
            fill: "#FBEAEA",
        });
        timeline.add({
            targets: "#monitor-logo",
            opacity: 1,
        });
        timeline.add({
            targets: "#monitor-logo",
            translateY: -34,
            duration: 700,
        });
        timeline.add(
            {
                targets: "#monitor-slogan",
                opacity: 1,
                duration: 700,
            },
            "-=700",
        );

        // Start endless background animation after timeline finished
        timeline.complete = () => {
            anime({
                targets: "#monitor-background",
                duration: 5000,
                easing: "linear",
                direction: "alternate",
                loop: true,
                fill: "#fbf5ea",
            });
        };
    },
    methods: {
        /**
         * Toggles the screen (on or off)
         */
        toggleMonitor(): void {
            anime({
                easing: "linear",
                targets: "#monitor-standby",
                duration: 400,
                opacity: this.powered ? 1 : 0,
            });
            anime({
                easing: "linear",
                targets: "#monitor-button-power",
                duration: 400,
                fill: this.powered ? "#838383" : "#FFFFFF",
            });
            this.powered = !this.powered;
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

svg {
    overflow: auto;

    * {
        font-family: "Press Start 2P", normal, sans-serif;
        font-size: 8px;
    }

    .small {
        font-size: 6px;
    }
}

#monitor-button {
    cursor: pointer;
}

#monitor-console {
    tspan {
        font-size: 8px;
    }
}

#monitor-standby {
    pointer-events: none;
}

#monitor-logo {
    font-size: 92px;
    fill: @gradient;
}

#monitor-slogan {
    text {
        fill: #000000;
        font-size: 12px;
    }
}
</style>
