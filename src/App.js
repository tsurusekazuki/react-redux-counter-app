import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import CounterContainer from './containers/CounterContainer';
import reducer from './reducers/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    </>
  );
};

export default App;
