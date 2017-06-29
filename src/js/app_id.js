import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Calculator from './containers/Calculator';
import IdWebApp from './containers/IdWebApp';

let domElement = document.getElementById('app_id');
console.log(domElement);
if(domElement!==null){
	const render = Component => {
		ReactDOM.render(
		<AppContainer>
		<Component/>
	</AppContainer>, domElement);
	};

	render(IdWebApp);

	if (module.hot) {
		module.hot.accept('./containers/IdWebApp', () => {
			render(IdWebApp);
		});
	}
}