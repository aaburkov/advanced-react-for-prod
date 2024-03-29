import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {
        mode, paths, isDev,
    } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name]-[contenthash].js',
            publicPath: '/',
            path: paths.output,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
    };
}
