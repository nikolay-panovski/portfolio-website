module.exports = {
   module: {
     rules: [
       {
         test: /\.(png|jpg|jpeg|svg)/,
         type: 'asset/resource'
       },
       {
        test: /\.md$/i,
        type: 'asset/source'
       },
     ]
   },
};