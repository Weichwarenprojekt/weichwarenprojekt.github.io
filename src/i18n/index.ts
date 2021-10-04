import { createI18n } from "vue-i18n";
import app_en from "./en.json";
import app_de from "./de.json";
import home_en from "@/modules/home/i18n/en.json";
import home_de from "@/modules/home/i18n/de.json";
import team_en from "@/modules/team/i18n/en.json";
import team_de from "@/modules/team/i18n/de.json";
import contact_en from "@/modules/contact/i18n/en.json";
import contact_de from "@/modules/contact/i18n/de.json";

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
    },
    [Locales.DE]: {
        global: app_de,
        home: home_de,
        team: team_de,
        contact: contact_de,
    },
};

export default createI18n({
    legacy: false,
    locale: Locales.DE,
    fallbackLocale: Locales.EN,
    messages: messages,
    globalInjection: true,
});
