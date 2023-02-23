import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import buildCssLoaders from '../build/loaders/buildCssLoaders';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

export default ({ config }: {config:Configuration}) => {
    config.resolve?.modules?.push(
        path.resolve(__dirname, '..', '..', 'src'),
        'node_modules',
    );

    config.resolve?.extensions?.push('.ts', '.tsx');

    // (config.module?.rules as RuleSetRule[])?.map((rule: RuleSetRule) => {
    //     if (/svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //     }

    //     return rule;
    // });

    // remove svg from existing rule
    const fileLoaderRule = (config?.module?.rules as RuleSetRule[]).find(
        (rule) => rule.test && (rule.test as RegExp).test('.svg'),
    );
    fileLoaderRule!.exclude = /\.svg$/;

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoaders());
    return config;
};
