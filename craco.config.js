const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            mode: "global",
            localIdentName: "[path][name]__[local]--[hash:base64:5]"
          }
        },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@base-color": "#f44336" },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
