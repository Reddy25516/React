import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import { reducerData} from './reducer';
const store= createStore(reducerData);

const Kraya = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  )
}

export default Kraya
