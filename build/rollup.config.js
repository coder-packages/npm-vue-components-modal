import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import minify from 'rollup-plugin-babel-minify';

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'Modal',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
        minify()
    ],
};
