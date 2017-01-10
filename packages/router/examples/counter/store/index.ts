const persistState = require('redux-localstorage');

export const enhancers = [
  persistState('counter', { key: 'angular-redux/examples/counter' })
];

if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

export interface RootState {
  counter: number;
}