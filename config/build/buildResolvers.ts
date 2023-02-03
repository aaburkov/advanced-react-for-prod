import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildResolvers(options: BuildOptions):webpack.ResolveOptions {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}