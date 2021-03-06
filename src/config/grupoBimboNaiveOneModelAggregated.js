export const grupoBimboNaiveAggregatedConfig = {
  // text and page layout
  projectTitle: 'Grupo Bimbo Inventory Demand',
  projectLink: 'https://www.kaggle.com/c/grupo-bimbo-inventory-demand',
  projectTitleNote: '',
  dataText: 'data',
  currentAlgo: 'glm',
  currentModelLabel: 'Generalized Linear Model',
  // boxplot config
  sortBoxplots: 'rootMeanSquaredValue',
  skeletonBox: true,
  // data attributes. this determines what sort of transition is shown.  will deprecate.
  aggregated: true,
  // API config for normal client-server mode
  server: 'http://172.16.2.141',
  port: '54321',
  frameIDs: {
    'drf-c6daf49d-dd1f-43b8-9eeb-99bb828d2a25': 'aggregated_gb_drf_combined_validation_prediction_deviance.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228ab7a',
    'gbm-ef176351-e583-4484-9a08-0f47dc10d4e1': 'aggregated_gb_gbm_combined_validation_prediction_deviance.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228ab7a',
    'glm-f52fe8cb-3aad-4eb0-b0cb-36ec16ae58a3': 'aggregated_gb_glm_combined_validation_prediction_deviance.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228ab7a',
  },
  // models: [ 'drf', 'gbm', 'glm'], // will refactor and deprecate
  // modelIDs: [ 'drf', 'gbm', 'glm'],
  models: ['gbm'], 
  modelIDs: ['gbm'],
  // modelIDs: [
  //   'drf-c6daf49d-dd1f-43b8-9eeb-99bb828d2a25',
  //   'gbm-ef176351-e583-4484-9a08-0f47dc10d4e1',
  //   'glm-f52fe8cb-3aad-4eb0-b0cb-36ec16ae58a3'
  // ],
  // style marks
  marks: {
    r: 2,
    fillOpacity: 0.3,
    colors: [
      '#1f78b4',
      '#ff7f00',
      '#33a02c',
      '#e31a1c',
      '#6a3d9a',
      '#b15928',
      '#a6cee3',
      '#fdbf6f',
      '#b2df8a',
      '#fb9a99',
      '#cab2d6',
      '#ffff99'
    ]
  },
  yScaleType: 'power',
  yScaleExponent: 0.2,
  // map columns (features) in the data to visual encodings
  predictColumn: 'predict',
  responseColumn: 'Demanda_uni_equil',
  yColumn: 'deviance',
  idColumn: undefined,
  xColumns: [
    'Ruta_SAK',
    'Venta_uni_hoy',
    'Venta_hoy',
    'Dev_uni_proxima',
    'Dev_proxima',
    'Demanda_uni_equil',
    'Demanda_uni_equil0'
  ],
  tooltipColumns: [
    {
      name: 'Demanda_uni_equil',
      type: 'numeric',
      format: ',.0f'
    },
    {
      name: 'predict',
      type: 'numeric',
      format: ',.0f'
    },
    {
      name: 'deviance',
      type: 'numeric',
      format: ',.0f'
    }
  ],
  numericColumns: [
    'predict',
    'deviance',
    'Ruta_SAK',
    'Venta_uni_hoy',
    'Venta_hoy',
    'Dev_uni_proxima',
    'Dev_proxima',
    'Demanda_uni_equil',
    'Demanda_uni_equil0',
  ],
  categoricalColumns: [
    'Agencia_ID',
    'Producto_ID',
    'Cliente_ID',
    'Semana',
    'Canal_ID',
    'NombreCliente',
    'NombreProducto',
    'Town',
    'State'
  ]
}
