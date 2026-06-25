import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src'],
        }),
        cssInjectedByJsPlugin(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'bav-ui',
            formats: ['es', 'cjs'],
            fileName: (format) => `bav-ui.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'zustand',
                'react-feather',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                    zustand: 'zustand',
                    'react-feather': 'ReactFeather',
                },
                preserveModules: false,
            },
        },
        sourcemap: true,
        emptyOutDir: true,
        copyPublicDir: false,
    },
});
