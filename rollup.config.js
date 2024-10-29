import postcss from 'rollup-plugin-postcss'
import vue from "rollup-plugin-vue"

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'cjs',
                file: 'dist/taavani-components.cjs.js',
            },
            {
                format: 'es',
                file: 'dist/taavani-components.esm.js',
            }
        ],
        plugins: [
            postcss({
                extensions: ['.css'],
                extract: true,
                modules: false,
                config: {
                    path: './postcss.config.cjs'
                },
            }),
            vue()
        ],
        external: [
            'vue',
            'vue-i18n',
            'tinyduration',
            '@heroicons/vue',
            '@heroicons/vue/16/solid',
            '@heroicons/vue/20/solid',
            '@heroicons/vue/24/outline',
            '@headlessui/vue',
            '@vuelidate/core',
            '@vuelidate/validators',
            'vue-tel-input'
        ]
    },
]
