import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Main from './components/Main';

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleWare(reduxThunk));
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
