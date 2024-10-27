import postcss from 'rollup-plugin-postcss'
import vue from "rollup-plugin-vue"

export default [
    {
        input: 'src/index.js',
        output: {
            format: 'esm',
            file: 'dist/taavani-components.esm.js',
        },
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
            '@headlessui/vue',
            '@vuelidate/core',
            '@heroicons/vue/20/solid',
            '@vuelidate/validators',
            'vue-tel-input'
        ]
    },
]
