import path from 'node:path';
import ts from "typescript";
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const { dirname: __dirname } = import.meta;

const outputConfigs = {
  cjs: {
    format: 'cjs',
    file: path.resolve(__dirname, 'dist/md5.cjs.js'),
  },
  'esm-bundler-js': {
    format: 'es',
    file: path.resolve(__dirname, 'dist/md5.esm-bundler.js'),
  },
  'esm-bundler-mjs': {
    format: 'es',
    file: path.resolve(__dirname, 'dist/md5.esm-bundler.mjs'),
  },
  umd: {
    format: 'umd',
    file: path.resolve(__dirname, 'dist/md5.umd.js'),
  },
};

const packageConfigs = Object.keys(outputConfigs).map((format) =>
  createConfig(format, outputConfigs[format]),
);

function createConfig(format, output) {
  let nodePlugins = [];
  const isUmdBuild = /umd/.test(format);
  const input = path.resolve(__dirname, 'src/index.ts')

  output.externalLiveBindings = false;
  if (isUmdBuild) output.name = 'FastMD5';
  
  if (format !== 'cjs') {
    nodePlugins = [
      nodeResolve({ browser: isUmdBuild }),
      commonjs({ sourceMap: false }),
    ];
  }

  return {
    input,
    output,
    plugins: [
      cleanup(),
      json({
        namedExports: false,
      }),
      typescript({
        clean: true, // no cache
        typescript: ts,
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
      }),
      ...nodePlugins,
    ],
  };
}

export default packageConfigs;
