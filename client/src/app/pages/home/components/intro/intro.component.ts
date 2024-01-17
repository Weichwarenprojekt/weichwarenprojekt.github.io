import {AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID} from "@angular/core";
import gsap from "gsap";
import { TranslateService } from "@ngx-translate/core";
import {isPlatformBrowser} from "@angular/common";

/**
 * The possible lines
 */
const possibleLines = [
    "home.intro.console.mid.0",
    "home.intro.console.mid.1",
    "home.intro.console.mid.2",
    "home.intro.console.mid.3",
];

@Component({
    selector: "app-intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements AfterViewInit, OnDestroy {
    /**
     * True if the display shall be powered
     */
    public powered = true;
    /**
     * The shown terminal lines
     */
    public terminalLines: string[][] = [
        [...this.translate.instant("home.intro.console.start")],
        [...this.translate.instant(possibleLines[gsap.utils.random(0, possibleLines.length - 1, 1)])],
        [...this.translate.instant("home.intro.console.end")],
    ];
    /**
     * The animation timeline
     */
    private timeline?: gsap.core.Timeline;

    /**
     * Constructor
     */
    constructor(private readonly translate: TranslateService, @Inject(PLATFORM_ID) private readonly platformId: Object) {}

    /**
     * Stop the timeline
     */
    ngOnDestroy(): void {
        this.timeline?.kill();
    }

    /**
     * Start the animation
     */
    ngAfterViewInit(): void {
        if (!this.rendersInBrowser()) return;

        // Start the animation with 1s delay
        this.timeline = gsap.timeline({
            delay: 1,
        });

        // Print console and hide it afterwards
        for (let i = 0; i < this.terminalLines.length; i++) {
            this.timeline.to(`#monitor-console-line-${i}`, {
                duration: 0,
                fillOpacity: 1,
                stagger: 0.015,
                delay: 0.4,
            });
        }
        this.timeline.to("#monitor-console", {
            duration: 0,
            opacity: 0,
            delay: 1,
        });

        // WP start animation
        this.timeline.to("#monitor-background", {
            fill: "#FBEAEA",
        });
        this.timeline.to("#monitor-logo", {
            opacity: 1,
        });
        this.timeline.to("#monitor-logo", {
            y: -34,
            duration: 0.7,
        });
        this.timeline.to(
            "#monitor-slogan",
            {
                opacity: 1,
                duration: 0.7,
                delay: 0.2,
            },
            "<",
        );

        // Start endless background animation after this.timeline finished
        this.timeline.then(() => {
            gsap.to("#monitor-background", {
                duration: 5,
                fill: "#fbf5ea",
                yoyo: true,
                yoyoEase: "linear",
                repeat: -1,
            });
        });
    }

    /**
     * Toggles the screen (on or off)
     */
    public toggleMonitor(): void {
        gsap.to("#monitor-standby", {
            ease: "linear",
            duration: 0.4,
            opacity: this.powered ? 1 : 0,
        });
        gsap.to("#monitor-button-power", {
            ease: "linear",
            duration: 0.4,
            fill: this.powered ? "#838383" : "#FFFFFF",
        });
        this.powered = !this.powered;
    }

    public rendersInBrowser() {
        return isPlatformBrowser(this.platformId)
    }
}
