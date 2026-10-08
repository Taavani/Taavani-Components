/**
 * Style
 */
import "../src/css/main.css"

/**
 *
 */
import {createI18n} from 'vue-i18n';
import {setup} from "@storybook/vue3-vite";

// Merge every ./locales/<locale>/*.json file into one message object per locale.
const localeFiles = import.meta.glob('./locales/*/*.json', {eager: true, import: 'default'})
const messages = {}
for (const [path, content] of Object.entries(localeFiles)) {
    const locale = path.split('/')[2]
    messages[locale] = {...messages[locale], ...content}
}

setup(async (app) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages,
        runtimeOnly: false,
    });

    app.use(i18n)
});

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            options: {
                light: {name: "Light", value: "rgb(244, 247, 250)"},
                dark: {name: "Dark", value: "#0f0f0f"}
            }
        },
    },

    initialGlobals: {
        backgrounds: {
            value: "light"
        }
    }
};

export default preview;
