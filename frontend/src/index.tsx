import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import GlobalSyles from './styles/global';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <GlobalSyles />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
