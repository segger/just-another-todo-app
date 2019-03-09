import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemReducer from './src/store/reducer';
import TodoScreen from './src/TodoScreen';

const store = createStore(itemReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <TodoScreen/>
      </Provider>
    )
  }
}
