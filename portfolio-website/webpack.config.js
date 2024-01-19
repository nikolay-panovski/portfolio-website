module.exports = {
   module: {
     rules: [
       {
         test: /\.(png|jpg|jpeg|svg)/,
         type: 'asset/resource'
       },
       {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
     ]
   },
};