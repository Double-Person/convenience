module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://bianmin.hkzhtech.com/api",		
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  }
};
