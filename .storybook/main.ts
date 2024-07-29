import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

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

    return config
  }
}
export default config
