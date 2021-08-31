const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  basePath: isProd ? `${process.env.BASE_PATH}` : `${process.env.BASE_PATH}`,
  images: {
    loader: 'imgix',
    path: isProd ? `${process.env.IMAGE_PATH}` : `${process.env.IMAGE_PATH}`,
  },
}
