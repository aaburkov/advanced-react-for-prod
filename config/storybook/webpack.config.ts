import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import buildCssLoaders from '../build/loaders/buildCssLoaders';

export default ({ config }: {config:Configuration}) => {
    config.resolve?.modules?.push(
        path.resolve(__dirname, '..', '..', 'src'),
        'node_modules',
    );

    config.resolve?.extensions?.push('.ts', '.tsx');

    // remove svg from existing rule
    const fileLoaderRule = (config?.module?.rules as RuleSetRule[]).find(
        (rule) => rule.test && (rule.test as RegExp).test('.svg'),
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fileLoaderRule!.exclude = /\.svg$/;

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoaders());
    return config;
};
