import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const {isDev} = options
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ?
                        '[path][name]__[local]--[hash:base64:4]' :
                        '[hash:base64:8]'
                },
            }
          },
          "sass-loader",
        ],
      }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/
    }

    const svgLoader = {
        test: /\.svg$/,
        use: '@svgr/webpack',
    }

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff|ttf)$/i,
      use: [{
        loader: 'file-loader',
      }]
  }
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        styleLoader,
    ]
}