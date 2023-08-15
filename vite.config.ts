import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'
import copy from 'rollup-plugin-copy'
import Unocss from 'unocss/vite'
import path from 'path'

export default defineConfig({

    base: './src',
   // root: './src',
    build: {
        manifest: true,
        minify: false,
        outDir: 'assets',
        assetsDir: 'assetsDIR',
        emptyOutDir: true,
      /*  lib: {
            name: 'fff',
            entry: [path.resolve('test1.ts'),path.resolve('test2.ts')],
            //[path.resolve('/admin/start.js'),path.resolve('./src/test1.ts'),path.resolve('./src/test2.ts')],
        },*/
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            input: [
                'src/test1.ts',
                'src/test2.ts'
                // 'src/style.scss',
                // 'src/assets'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                },
                chunkFileNames: 'js/[name].js',
                entryFileNames: 'js/[name].js',

                assetFileNames: ({ name }) => {
                    // if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                    //     return 'images/[name][extname]';
                    // }

                    if (/\.css$/.test(name ?? '')) {
                        return 'css/[name][extname]'
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return '[name][extname]'
                },
            },
        },
    },
    plugins: [
        Unocss(),
        liveReload(`${__dirname}/**/*\.php`),
        copy({
            targets: [{ src: 'src/assets/*', dest: 'assets/' }],
        }),],
})
