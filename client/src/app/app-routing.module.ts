import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TeamComponent } from "./pages/team/team.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DataProtectionComponent } from "./pages/data-protection/data-protection.component";
import { LegalNoticeComponent } from "./pages/legal-notice/legal-notice.component";
import { ThirdPartyComponent } from "./pages/third-party/third-party.component";
import { GithubComponent } from "./pages/github/github.component";

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "team",
        component: TeamComponent,
    },
    {
        path: "contact",
        component: ContactComponent,
    },
    {
        path: "github",
        component: GithubComponent,
    },
    {
        path: "data-protection",
        component: DataProtectionComponent,
    },
    {
        path: "legal-notice",
        component: LegalNoticeComponent,
    },
    {
        path: "third-party",
        component: ThirdPartyComponent,
    },
    { path: "**", redirectTo: "home" },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: "top",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
