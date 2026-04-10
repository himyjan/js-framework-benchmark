import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/main.js', 
  output: {
    file: 'dist/main.js',
    format: 'es', 
    sourcemap: false
  },
  plugins: [
    nodeResolve(), 
    terser()
  ]
};