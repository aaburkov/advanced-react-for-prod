import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildCssLoaders from './loaders/buildCssLoaders';
import buildSvgLoader from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const { isDev } = options;
    const styleLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|ttf)$/i,
        use: [{
            loader: 'file-loader',
        }],
    };

    const babelLoader = {
        test: /\.(jsx?|tsx?)$/i,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        { locales: ['ru', 'en'], keyAsDefaultValue: true },
                    ],
                ],
            },
        }],
    };
    return [
        fileLoader,
        buildSvgLoader(),
        babelLoader,
        typescriptLoader,
        styleLoader,
    ];
}
