import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginQuery from '@tanstack/eslint-plugin-query';

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
    {
        plugins: {
            prettier: prettierPlugin,
            react: pluginReact,
            '@tanstack/query': pluginQuery,
        },
        rules: {
            'no-undef': 'error',
            'no-console': 'error',
            'react/display-name': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@tanstack/query/exhaustive-deps': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
            tailwindcss: {
                whitelist: ['active'],
            },
        },
    },
    {ignores: ['vite.config.ts', 'global.css']},
];
