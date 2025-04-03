import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const baseUrl = '/unknown-first';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 9080,
        proxy: {
            [baseUrl]: {
                target: 'https://67dbea9f1fd9e43fe47675e7.mockapi.io',
                changeOrigin: true,
                secure: true,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
        },
    },
    define: {'import.meta.env.API_BASE_URL': JSON.stringify(baseUrl)},
});
