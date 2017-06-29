import React, {Component} from 'react';
import logo from '../../images/logo.jpg'

class Calculator extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		

		return (
			<div>
				<img src={logo} />
				<h5 className="center-align">Official Site Coming Soon!</h5>
				<h5 className="center-align">Our FB Group:<a href="https://www.facebook.com/epoker88"></a></h5>
			</div>
		);
	}
};

export default Calculator;