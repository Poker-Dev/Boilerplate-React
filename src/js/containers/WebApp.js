import React, {Component} from 'react';

function script(url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    document.body.appendChild(s);
}

function lazyLoadScripts(isRelease) {
	if(isRelease){
		script('js/startup.js');
		script('js/init.js');

	}else{
		script('vendor/js/startup.js');
		script('vendor/js/init.js');
	}
}

class WebApp extends Component {
	constructor(props) {
		super(props);
		this.state = {lang: props.lang,isRelease:props.isRelease};
		console.log(props,this.state);
	}

	componentDidMount() {
		lazyLoadScripts(this.state.isRelease);
	};

	render() {

		const imageDirPath = this.state.isRelease ? 
			'images/' : 'docs/images/';
		const logoImg = imageDirPath + 'epoker-logo.png';

		const bgImageStyles = {
			images1:{
				backgroundImage: 'url('+imageDirPath+'demo/epoker_demo1.jpg)'
			},
			images2:{
				backgroundImage: 'url('+imageDirPath+'demo/epoker_demo2.jpg)'
			},			
			images3:{
				backgroundImage: 'url('+imageDirPath+'demo/epoker_demo3.jpg)'
			},
			images4:{
				backgroundImage: 'url('+imageDirPath+'demo/epoker_demo4.jpg)'
			},			
			images5:{
				backgroundImage: 'url('+imageDirPath+'demo/epoker_demo5.jpg)'
			},
			images6:{
				backgroundImage: 'url('+imageDirPath+'demo/epoker_demo6.jpg)'
			}
		};

		return (
			<g>
				<nav className="navbar dark absolute">
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">
						<img className="materialize-logo" src={logoImg} alt="" />
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li className="active"><a href="#!">Home</a></li>
						<li><a href="https://www.facebook.com/groups/602325429962768/?fref=ts" target="_blank">Our Club</a></li>
						<li><a href="http://www.pppoker.net/" target="_blank">PPPoker</a></li>
						</ul>

						<a href="#" data-activates="slide-out" className="button-collapse right"><i className="material-icons">menu</i></a>
					</div>
					</nav>
					<ul id="slide-out" className="side-nav">
					<li className="active"><a href="#!">Home</a></li>
					<li><a href="https://www.facebook.com/groups/602325429962768/?fref=ts" target="_blank">Our Club</a></li>
					<li><a href="http://www.pppoker.net/" target="_blank">PPPoker</a></li>
					</ul>
				<div className="phone-wall-intro header white full-height">
					<div className="header-background"></div>
					<div id="slogan-section" className="header-wrapper row">
					<div className="col s12 m10 offset-m1 valign-wrapper">
						<div className="valign">
						<div className="slogan-logo">
							<span className="tagline">Premium Mobile Poker Entertainment.</span>
							<button className="read-more"><i className="icon-caret-down"></i></button>
						</div>
						</div>
					</div>
					<div className="col s12 m10 offset-m1 column-wrapper">
						<div className="column-two">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images1}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images2}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images3}></div>
						</div>
						</div>
						<div className="column-one">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images3}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images1}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images2}></div>
						</div>
						</div>
						<div className="column-two">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images4}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images5}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images6}></div>
						</div>
						</div>
						<div className="column-one">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images5}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images6}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images4}></div>
						</div>
						</div>
						<div className="column-two">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images3}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images5}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images4}></div>
						</div>
						</div>
						<div className="column-one">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images6}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images1}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images2}></div>
						</div>
						</div>
						<div className="column-two">
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images5}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images2}></div>
						</div>
						<div className="phone-preview-sizer">
							<div className="phone-preview"></div>
							<div className="image-container default" style={bgImageStyles.images4}></div>
						</div>
						</div>
					</div>
					</div>
				</div>
				<div id="steps-section" className="section valign-wrapper">
				<div className="container">
					<div className="row">
					<div className="col s12"><h2 className="section-title">Steps</h2></div>
					<div className="col s12 m4 l4">
						<h4><i className="icon-light-bulb"></i></h4>
						<p className="caption">Download <a href="http://www.pppoker.net/" target="_blank" >PPPoker</a></p>
					</div>
					<div className="col s12 m4 l4">
						<h4><i className="icon-rocket"></i></h4>
						<p className="caption">Launch PPPoker and go to <strong>List</strong></p>
					</div>
					<div className="col s12 m4 l4">
						<h4><i className="icon-star"></i></h4>
						<p className="caption">Join Club ID: 15415</p>
					</div>
					</div>
				</div>
				</div>
				<footer id="footer-section" className="page-footer">
					<div className="container">
						<div className="row">
						<div className="col s6 m3">
							<img className="materialize-logo" src={logoImg} alt="" />
							<p>Made with Fun by epoker88.</p>
						</div>
						<div className="col s6 m3">
							<h5>Contact</h5>
							<ul>
							<li><i className="tiny material-icons">email</i><a href="mailto:cs@epoker88.com">Email to cs@epoker88.com</a></li>
							<li><i className="tiny material-icons">chat_bubble_outline</i><a href="https://www.facebook.com/epoker88/" target="_blank">www.facebook.com/epoker88</a></li>
							</ul>
						</div>
						</div>
					</div>
				</footer>
			</g>
		);
	}
};

export default WebApp;