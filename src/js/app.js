import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import WebApp from './containers/WebApp';

let domElement = document.getElementById('app');
console.log(domElement)

if(domElement!==null){
	const render = Component => {
		ReactDOM.render(
		<AppContainer>
		<Component lang="en" isRelease={true} />
		{/*{<Component lang="en" isRelease={true} />}*/}
	</AppContainer>, domElement);
    };

	render(WebApp);

	if (module.hot) {
		module.hot.accept('./containers/WebApp', () => {
			render(WebApp);
		});
	}
}