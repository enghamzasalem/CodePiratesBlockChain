import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
	<footer>
		<div className="container">
			<ul>
				<li><Link to="/terms-and-conditionsf">Terms and Conditions</Link></li>
				<li><Link to="/privacyd">Privacy Policy</Link></li>
				{/*<li><Link to="/refund-cancellation">Refund and Cancellation Policy</Link></li>*/}
			</ul>

			<p className="text-muted">All rights reserved Menax@2018 </p>
		</div>
	</footer>
);

export default Footer;
