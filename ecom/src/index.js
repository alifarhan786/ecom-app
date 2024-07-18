import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Resize from './components/Resize';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
//import { DarkModeProvider } from './components/DarkModeProvider';
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'
import {app} from './firebase.config'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} app={app}>
    <PersistGate loading={'Loading'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);


