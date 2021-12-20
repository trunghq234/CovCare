const CracoLessPlugin = require('craco-less');
// import 'mapbox-gl/dist/mapbox-gl.css';

module.exports = {
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff',
              '@link-color': '#1890ff',
              '@success-color': '#389e0d',
              '@warning-color': '#ffec3d',
              '@error-color': '#f5222d',
              '@font-size-base': '16px',
              '@font-size-lg': '16px',
              '@heading-color': 'rgba(0, 0, 0, 0.85)',
              '@text-color': 'rgba(0, 0, 0, 0.65)',
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
              '@disabled-color': 'rgba(0, 0, 0, 0.25)',
              '@border-radius-base': '6px',
              '@border-color-base': '#d9d9d9',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
