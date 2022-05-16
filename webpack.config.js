const path=require('path');
module.exports={
    entry: './src/index.js',
    mode:"development",
    output:{
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    watch: true,
    // resolve: {
    //     extensions : [
    //         '.js'
    //     ]
    // },
    module:{
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],}
      
}