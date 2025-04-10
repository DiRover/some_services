import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const mockApiURL = '/unknown-first';
const dummyJson = '/dummyJson';

export default defineConfig({
    plugins: [react(), tailwindcss()],
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
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@libs': path.resolve(__dirname, './src/libs'),
        },
    },
    define: {
        'import.meta.env.MOCK_API_URL': JSON.stringify(mockApiURL),
        'import.meta.env.DUMMY_API_URL': JSON.stringify(dummyJson),
    },
});
