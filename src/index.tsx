import ReactDOM from 'react-dom';

import App from './app';

const renderMethod = ReactDOM.render;
const render = () => renderMethod(
  <App />,
  document.getElementById('root'),
);

render();
