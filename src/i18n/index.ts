import { createI18n } from "vue-i18n";
import app_en from "./en.json";
import app_de from "./de.json";
import home_en from "@/pages/home/i18n/en.json";
import home_de from "@/pages/home/i18n/de.json";
import team_en from "@/pages/team/i18n/en.json";
import team_de from "@/pages/team/i18n/de.json";
import contact_en from "@/pages/contact/i18n/en.json";
import contact_de from "@/pages/contact/i18n/de.json";
import legal_notice_en from "@/pages/legal-notice/i18n/en.json";
import legal_notice_de from "@/pages/legal-notice/i18n/de.json";

export enum Locales {
    EN = "en",
    DE = "de",
}

export const messages = {
    [Locales.EN]: {
        global: app_en,
        home: home_en,
        team: team_en,
        contact: contact_en,
        legalNotice: legal_notice_en,
    },
    [Locales.DE]: {
        global: app_de,
        home: home_de,
        team: team_de,
        contact: contact_de,
        legalNotice: legal_notice_de,
    },
};

export default createI18n({
    legacy: false,
    locale: navigator.language.split("-")[0],
    fallbackLocale: Locales.EN,
    messages: messages,
    globalInjection: true,
});
