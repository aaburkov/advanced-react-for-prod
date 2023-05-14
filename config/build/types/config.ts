export type BuildMode = 'production' | 'development';
export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
    locales: string,
    buildLocales: string
}

export type ProjectEnv = 'storybook' | 'frontend' | 'jest'
export interface BuildOptions {
    mode:BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    baseUrl: string
    port: number,
    env?: ProjectEnv
}
export interface BuildEnv {
    mode: BuildMode,
    port: number,
    baseUrl: string
}
