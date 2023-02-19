import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemReducer from './src/store/reducer';
import AppNavigator from './src/navigation/AppNavigator';

const store = createStore(itemReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    )
  }
}
