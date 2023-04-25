import { Config, configUmiAlias, createConfig } from '@umijs/max/test';

export default async () => {
  return (await configUmiAlias({
    ...createConfig({
      target: 'browser',
      jsTransformer: 'esbuild',
      // config opts for esbuild , it will pass to esbuild directly
      jsTransformerOpts: {
        tsx: 'automatic',
        jsx: 'automatic',
        js: 'automatic',
      },
    }),
    transform: {
      '\\.[jt]sx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    collectCoverageFrom: [
      'src/**/*.{ts,js,tsx,jsx}',
      '!src/.umi/**',
      '!src/.umi-test/**',
      '!src/.umi-production/**',
    ],
    // if you require some es-module npm package, please uncomment below line and insert your package name
    // transformIgnorePatterns: ['node_modules/(?!.*(lodash-es|your-es-pkg-name)/)']
  })) as Config.InitialOptions;
};
