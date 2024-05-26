// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

export default withNuxt(antfu(
    // ANTFU
    {
        // formatters: {
        //   css: true,
        //   html: true,
        //   markdown: true
        // },
        ignores: [
            'node_modules',
            'dist',
            '.nuxt',
            'coverage',
        ],
        rules: {
            'import/order': 'off', // Conflicts with perfectionist when not 'off'
            'style/indent': 'off',
        },
        stylistic: {
            indent: 2,
            quotes: 'single'
        },
        typescript: {
            overrides: {
                'ts/explicit-function-return-type': 'error',
                'ts/no-inferrable-types': 'error',
                'ts/no-unsafe-call': 'off',
            },
            tsconfigPath: 'tsconfig.json',
        },
        vue: {
            overrides: {
                'vue/attributes-order': 'off', // Conflicts with perfectionist when not 'off'
                'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }],
                'vue/no-export-in-script-setup': 'error',
                'vue/script-indent': ['error', 2, { baseIndent: 1, ignores: [], switchCase: 1 }],
                'vue/block-order': ['error', { order: [ 'template', 'script', 'style' ] }]
            }
        }
    },
    // PERFECTIONIST
    {
        plugins: { ...perfectionistNatural.plugins },
        rules: {
            ...perfectionistNatural.rules,
            'perfectionist/sort-interfaces': 'off',
            'perfectionist/sort-objects': 'off',
            'perfectionist/sort-vue-attributes': [
                'error',
                {
                    'custom-groups': {
                        'vue-binds': ':*',
                        'vue-directives': 'v-*',
                        'vue-events': '@*',
                    },
                    'groups': ['vue-directives', 'multiline', 'unknown', 'vue-binds', 'shorthand', 'vue-events'],
                    'order': 'desc',
                    'type': 'natural',
                },
            ]
        }
    }
))