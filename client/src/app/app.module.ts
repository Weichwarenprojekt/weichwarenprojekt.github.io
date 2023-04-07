import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { HeaderComponent } from "./components/header/header.component";
import { IntroCardComponent } from "./components/intro-card/intro-card.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DataProtectionComponent } from "./pages/data-protection/data-protection.component";
import { LegalNoticeComponent } from "./pages/legal-notice/legal-notice.component";
import { TeamComponent } from "./pages/team/team.component";
import { ThirdPartyComponent } from "./pages/third-party/third-party.component";
import { FocusCardComponent } from "./pages/home/components/focus-card/focus-card.component";
import { IntroComponent } from "./pages/home/components/intro/intro.component";
import { QuestionComponent } from "./pages/home/components/question/question.component";
import { ShowcaseComponent } from "./pages/home/components/showcase/showcase.component";
import { LOCATION_INITIALIZED, LocationStrategy, NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoadingComponent } from "./components/loading/loading.component";
import { MemberCardComponent } from "./pages/team/components/member-card/member-card.component";
import { OpenSourceComponent } from "./pages/open-source/open-source.component";
import { OpenSourceProjectComponent } from "./pages/open-source/components/open-source-project/open-source-project.component";
import { NgChartsModule } from "ng2-charts";

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
        FooterComponent,
        HeaderComponent,
        IntroCardComponent,
        HomeComponent,
        ContactComponent,
        DataProtectionComponent,
        LegalNoticeComponent,
        TeamComponent,
        ThirdPartyComponent,
        FocusCardComponent,
        IntroComponent,
        QuestionComponent,
        ShowcaseComponent,
        LoadingComponent,
        MemberCardComponent,
        OpenSourceComponent,
        OpenSourceProjectComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: "en",
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient, LocationStrategy],
            },
        }),
        FormsModule,
        NgChartsModule,
        NgOptimizedImage,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: AppInitializerFactory,
            deps: [TranslateService, Injector],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * Required for translations
 */
export function HttpLoaderFactory(http: HttpClient, locationStrategy: LocationStrategy) {
    const loader = new TranslateHttpLoader(http);
    loader.prefix = `${locationStrategy.getBaseHref()}assets/i18n/`;
    return loader;
}

/**
 * Wait for the application to load the translations first
 */
export function AppInitializerFactory(translate: TranslateService, injector: Injector) {
    return () =>
        new Promise<any>((resolve: any) => {
            const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
            locationInitialized.then(() => {
                const language = navigator.language.split("-")[0];
                translate.setDefaultLang("en");
                translate.use(language).subscribe({
                    complete: () => resolve(),
                });
            });
        });
}
