import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        dedupe: ['vue', 'pinia', 'vue-i18n', '@heroicons/vue'],
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'TaavaniComponents',
            fileName: (format) => `taavani-components.${format === 'es' ? 'esm' : format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            plugins: [
                nodeResolve({
                    exportConditions: ['import', 'module', 'browser', 'default'],
                }),
            ],
            external: ['vue', 'pinia', 'vue-i18n'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        cssCodeSplit: false,
        minify: 'esbuild',
        sourcemap: true,
    },
});