import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Calculator from './containers/Calculator';
import IdWebApp from './containers/IdWebApp';

const render = Component => {
	ReactDOM.render(
    <AppContainer>
    <Component/>
  </AppContainer>, document.getElementById('app'));
};

render(IdWebApp);

if (module.hot) {
	module.hot.accept('./containers/IdWebApp', () => {
		render(IdWebApp);
	});
}