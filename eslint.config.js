import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginQuery from '@tanstack/eslint-plugin-query';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ['**/*.{ts,tsx}']},
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    reactHooks.configs['recommended-latest'],
    {
        plugins: {
            '@tanstack/query': pluginQuery,
            perfectionist,
            prettier: prettierPlugin,
            react: pluginReact,
            tailwindcss: tailwindPlugin,
        },
        rules: {
            '@tanstack/query/exhaustive-deps': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-unused-vars': [
                2,
                {argsIgnorePattern: '^_', ignoreRestSiblings: true},
            ],
            'no-console': 'error',
            'no-undef': 'error',
            'perfectionist/sort-interfaces': ['error'],
            'perfectionist/sort-objects': [
                'error',
                {
                    type: 'alphabetical',
                },
            ],
            'react/display-name': 'off',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
        },
        settings: {
            perfectionist: {
                type: 'alphabetical',
            },
            react: {
                version: 'detect',
            },
        },
    },
    {ignores: ['vite.config.ts', 'global.css']},
];
