module.exports = {
    // ���� ó�� ���� ��ũ��Ʈ����
    // ���⼭���� import �Ǿ��ִ� �ٸ� ��ũ��Ʈ�� �ҷ��´�.
    entry: './src/index.js',

    // ������ ��ġ�� ./public/bundle.js �� �����Ѵ�.
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    // ES6 ������ JSX ������ ����Ѵ�
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};