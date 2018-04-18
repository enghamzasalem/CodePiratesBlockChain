import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {Icon} from 'react-fa';
import scrollToElement from 'scroll-to-element';

import FAQ from './FAQ';
import Support from './Support';


class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showFaqModal: false,
			showSupportModal: false
		}
	}

	componentDidMount() {
		let hash = window.location.hash;
		if (hash && hash != '') {
			hash = hash.replace('#', '');

			let el = document.getElementById(hash);
			if (el) el.scrollIntoView();
		}
	}

	render() {
	    return (
	    	<div id="header">
				<div className="container">
				    <div className="navbar-header">
				    	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
				        	<span className="sr-only">Toggle navigation</span>
				        	<span className="icon-bar"></span>
				        	<span className="icon-bar"></span>
				        	<span className="icon-bar"></span>
				    	</button>

				    	<Link to="/">
				        	<div className="logo-container">
				        		<img src="https://scontent.famm3-2.fna.fbcdn.net/v/t1.0-9/28167868_170009520448380_5230057886471880262_n.png?_nc_eui2=v1%3AAeEDEXFw4jC63BKW1CTxZ8t6V_Qd0IjjLngBNAQr0JsOmIh_BsP6ynmWP4nJh2AgLGCQjUhE6ahyaafZKqJ6hCFLkqyKQXqs5-OGI3GYu7LYcw&oh=b8a404338f892398aa317b956e301b42&oe=5B3DB0F4" />
				                <h1 className="header-text"> MENAX </h1>
							</div>
				      	</Link>
				    </div>

				    <div className="collapse navbar-collapse" id="navigation-index">
				    	<ul className="nav navbar-nav navbar-right">
						 

							<li className="social-mobile">
								 

								<a href="https://web.facebook.com/MENAXofficial" target="_blank" className="btn btn-simple btn-just-icon visible-xs">
									<i className="fa fa-facebook" aria-hidden="true"></i>
								</a>

							 
							</li>

						 

							<li className="visible-sm visible-md visible-lg">
								<a href="https://www.facebook.com/MENAXofficial" target="_blank" className="btn btn-simple btn-just-icon" rel="tooltip" title="" data-placement="bottom" data-original-title="Like us on Facebook">
									<i className="fa fa-facebook" aria-hidden="true"></i>
								</a>
							</li>

							 
				    	</ul>
				    </div>

				    
				</div>
			</div>
	    );
	}
}

export default Header;
