import Map from './../components/Map';

export default class ModelMap {
  constructor(cachedModels = {}) {
    this.cachedModels = cachedModels;
    this.models = {
      'map': new Map()
    };
  }

  getData(model = 'map', callback = null) {
    model = model.toLowerCase();

    console.debug('[App] - Get model: ', model);// eslint-disable-line no-console
    this.models[model].fetch((data) => {
      this.cachedModels[model] = this.models[model];

      if (typeof callback === 'function') {
        callback(data);
      }
    });
  }
}
