import { BuildOptions } from './types/config';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import webpack from 'webpack';

export function buildDevServer(options: BuildOptions):DevServerConfiguration {
    return {
         port: options.port,
         open: true,
         historyApiFallback: true
    }
}