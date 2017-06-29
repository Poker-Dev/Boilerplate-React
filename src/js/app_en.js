import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Calculator from './containers/Calculator';
import EnWebApp from './containers/EnWebApp';

const render = Component => {
	ReactDOM.render(
    <AppContainer>
    <Component/>
  </AppContainer>, document.getElementById('app_en'));
};

render(EnWebApp);

if (module.hot) {
	module.hot.accept('./containers/EnWebApp', () => {
		render(EnWebApp);
	});
}