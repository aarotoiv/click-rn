import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Main from './components/Main';

export default class App extends Component {
  componentDidMount() {
    console.log(applyMiddleware);
    StatusBar.setHidden(true);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
