
import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint'
import baseConfig from './vite.config.base'

export default mergeConfig({
    mode: 'dev', 
    server: {
        open: true, 
        fs: {
            strict: true
        }, 
    }, 
    // plugins: [
    //     eslint({
    //         include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue'], 
    //         exclude: ['node_module']
    //     }), 
    // ], 
}, baseConfig);