import React, {Component} from 'react';
import logo from '../../images/logo.jpg'

class Calculator extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		

		return (
			<div id="banner">
				{/*<header>
					<nav>
						<div className="nav-wrapper">
						<a href="#!" className="brand-logo">Logo</a>
						<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><a href="sass.html">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="mobile.html">Mobile</a></li>
						</ul>
						<ul className="side-nav" id="mobile-demo">
							<li><a href="sass.html">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="mobile.html">Mobile</a></li>
						</ul>
						</div>
					</nav>
				</header>*/}
				<main id="page-wrap">
					<div className="row">
						<div className="col s12">
							<img className="responsive-img" src={logo} />
						</div>
						<div className="col s12">
							<h5 className="center-align">Official Site Coming Soon!</h5>
						</div>
						<div className="col s12">
							<h5 className="center-align">Our FB Group:<a href="https://www.facebook.com/epoker88">https://www.facebook.com/epoker88</a></h5>
						</div>
					</div>
				</main>
				{/*<footer className="page-footer">
					<div className="container">
						<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Footer Content</h5>
							<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Links</h5>
							<ul>
							<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
							<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
							<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
							<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
							</ul>
						</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
						© 2014 Copyright Text
						<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
						</div>
					</div>
				</footer>*/}
			</div>
		);
	}
};

export default Calculator;