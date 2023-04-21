import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins(
    {
        paths, isDev, baseUrl, env = 'frontend',
    }: BuildOptions,
):webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(baseUrl),
            __PROJECT__: JSON.stringify(env),
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }
    return plugins;
}
