import webpack from 'webpack';
export function buildResolvers():webpack.ResolveOptions {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}