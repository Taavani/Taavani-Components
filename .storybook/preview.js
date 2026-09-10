/**
 * Style
 */
import "../src/css/main.css"

/**
 *
 */
import {createI18n} from 'vue-i18n';
import {setup} from "@storybook/vue3-vite";

setup(async (app) => {
    const {en} = await import('./translations.json')

    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages: {
            en: en
        },
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
