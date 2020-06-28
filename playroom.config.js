module.exports = {
    components: './src/components',
    outputPath: './storybook-static/playroom',
    exampleCode: '<About />',
    openBrowser: false,
    frameComponent: './.playroom/frame.tsx',
    typeScriptFiles: [
        'src/components/**/*.{ts,tsx}',
        '!**/node_modules'
    ],
    webpackConfig: () => ({
        module: {
            rules: [
            {
                test: /\.(ts|tsx)$/,
                include: __dirname,
                exclude: /node_modules/,
                use: {
                  loader: require.resolve('babel-loader'),
                  options: {
                    presets: [
                      require.resolve('@babel/preset-env'),
                      require.resolve('@babel/preset-react'),
                      require.resolve('@babel/preset-typescript')
                    ],
                    plugins: [
                      require.resolve('@babel/plugin-proposal-class-properties')
                    ]
                  }
                }
              },
              {
                test: /\.js$/,
                include: __dirname,
                exclude: /node_modules/,
                use: {
                  loader: require.resolve('babel-loader'),
                  options: {
                    presets: [
                      require.resolve('@babel/preset-env'),
                      require.resolve('@babel/preset-react')
                    ],
                    plugins: [
                      require.resolve('@babel/plugin-proposal-class-properties')
                    ]
                  }
                }
              },
              {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [require.resolve("style-loader"), require.resolve("css-loader")],
              },
            ],
          },
    })
};