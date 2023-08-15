// @ts-check
/* node */
/** @file Local package prettier config file */
const { Prettier, merge } = require('@snailicide/build-config')
module.exports = merge(Prettier.config, {
    plugins: ['@prettier/plugin-php'],
    overrides: [
        {
            files: '*.php',
            options: {
                phpVersion: '8.1',
            },
        },
    ],
})
