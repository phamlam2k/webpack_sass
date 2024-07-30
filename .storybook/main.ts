import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import { ProvidePlugin, DefinePlugin } from 'webpack'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (config: any) => {
    // Tìm rule xử lý tệp CSS hiện tại và thêm tệp SCSS vào danh sách test
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('css')
    )

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    // Thêm rule mới để xử lý SVG bằng @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })

    if (cssRule) {
      cssRule.test = /\.(css|scss|sass)$/
      cssRule.use = [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'sass-loader'
      ]
    } else {
      // Thêm rule mới để xử lý các tệp SCSS nếu không tìm thấy rule xử lý tệp CSS hiện tại
      config.module.rules.push({
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
      })
    }

    config.plugins.push(
      new ProvidePlugin({
        React: 'react',
        process: 'process/browser'
      })
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../public'),
      '@assets': path.resolve(__dirname, '../src/_libs/assets'),
      '@type': path.resolve(__dirname, '../src/types/'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@modules': path.resolve(__dirname, '../src/modules/'),
      '@hooks': path.resolve(__dirname, '../src/_libs/hooks/'),
      '@layout': path.resolve(__dirname, '../src/_libs/layout/'),
      '@components': path.resolve(__dirname, '../src/components/')
    }

    return config
  }
}
export default config
