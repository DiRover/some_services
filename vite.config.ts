import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

const mockApiURL = '/unknown-first';
const dummyJson = '/dummyJson';
const openRouterProxy = '/openRouter';

export default defineConfig({
    plugins: [react(), tailwindcss(), svgr()],
    server: {
        port: 9080,
        proxy: {
            [mockApiURL]: {
                target: 'https://67dbea9f1fd9e43fe47675e7.mockapi.io',
                changeOrigin: true,
                secure: true,
            },
            [dummyJson]: {
                target: 'https://dummyjson.com',
                changeOrigin: true,
                secure: true,
                rewrite: path => path.replace(new RegExp(`^${dummyJson}`), ''),
            },
            [openRouterProxy]: {
                target: 'https://openrouter.ai',
                changeOrigin: true,
                secure: true,
                rewrite: path => path.replace(/^\/openRouter/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@libs': path.resolve(__dirname, './src/libs'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
        },
    },
});
