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
	 
	  "/addons/signin/api.index/dosign": {
	    target: "http://bianmin.hkzhtech.com",		
	    changeOrigin: true,
	    ws: true,
	    pathRewrite: {
	      "^/addons/signin/api.index/dosign": "",
	    },
	  },
	  
    },
  }
};
