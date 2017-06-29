import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Calculator from './containers/Calculator';
import EnWebApp from './containers/EnWebApp';

let domElement = document.getElementById('app_en');

if(domElement!==null){
	const render = Component => {
		ReactDOM.render(
		<AppContainer>
		<Component/>
	</AppContainer>, domElement);
	};

	render(EnWebApp);

	if (module.hot) {
		module.hot.accept('./containers/EnWebApp', () => {
			render(EnWebApp);
		});
	}
}