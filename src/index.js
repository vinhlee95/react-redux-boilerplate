import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
, document.getElementById('root'));
registerServiceWorker();
