import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Calculator from './containers/Calculator';
import Default from './containers/Default';

const render = Component => {
	ReactDOM.render(
    <AppContainer>
    <Component/>
  </AppContainer>, document.getElementById('app'));
};

render(Default);

if (module.hot) {
	module.hot.accept('./containers/Default', () => {
		render(Default);
	});
}