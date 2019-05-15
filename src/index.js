import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { ActionCableProvider } from 'react-actioncable-provider'
import adapter from './services/adapter'
import App from './components/App';


ReactDOM.render(
  <ActionCableProvider url={adapter.API_WS_ROOT}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);
