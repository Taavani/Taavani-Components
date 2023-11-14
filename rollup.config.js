import postcss from 'rollup-plugin-postcss'
import vue from "rollup-plugin-vue"

export default [
    {
        input: 'src/index.js',
        output: {
            format: 'esm',
            file: 'dist/taavani-components.esm.js'
        },
        plugins: [
            postcss({
                extensions: ['.css'],
                extract: true,
                modules: true,
                config: {
                    path: './postcss.config.cjs'
                },
            }),
            vue()
        ]
    },
]
