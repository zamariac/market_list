var React = require('react');
var $ = require('jQuery');
window.jQuery = $;
require('bootstrap/js/carousel.js');

module.exports = React.createClass({
	render: function(){
		return (
		<div>
			<div>
				<a href="#login" className="logInButton"> Log in </a>
				<div className="headerwraphome"> 
				<a href="#home" className="homeheadhome"> MARKET LIST </a> 
				</div>

				<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
						<li data-target="#carousel-example-generic" data-slide-to="1"></li>
						<li data-target="#carousel-example-generic" data-slide-to="2"></li>
					</ol>
					 <div className="carousel-inner" role="listbox">
						<div className="item active">
							<img src="styles/images/wirebasket.jpeg" alt="produce"/>
						 	<div className="carousel-caption">
								<div className="intro"> FIND WHAT YOU'RE LOOKING FOR </div>
									<div className= "introTwo"> Plan your meals and reduce waste by finding exactly what you need. </div>
							</div>
						</div>
						<div className="item">
							<img src="styles/images/cherries.jpeg" alt="rootveg"/>
							<div className="carousel-caption">
								<div className="intro"> ENJOY THE SEASON'S FRESHEST </div>
									<div className= "introTwo"> Stay on top of what's in season right now and at the market. </div>
							</div>
						</div>
						<div className="item">
							<img src="styles/images/grapes.jpeg" alt="honey"/>
							<div className="carousel-caption">
								<div className="intro"> SUPPORT LOCAL COMMUNITIES </div>
									<div className= "introTwo"> Make an impact on sustainability &  support your local farms and artisans. </div>
							</div>
						</div>
					</div>
					  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
		   				 <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		    				<span className="sr-only">Previous</span>
		 			 </a>
		 			 <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
		    			<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		    				<span className="sr-only">Next</span>
		  			</a>
				</div>
			</div>
		
		<div className="buttonDiv">
		<a href="#findmarket" className="findMarketButton"> FIND A MARKET </a>
		<a href="#signup" className="signUpButton"> VENDOR SIGN UP </a>
		</div>

		<div className="welcome">
		<div className="introBlurb"> WELCOME TO MARKET LIST </div>
		<div className="introBlurbTwo"> We are happy to be here to help make the best of your farmer's market experience. 
		Whether you're a vendor or a consumer, Market list helps you plan ahead. Vendors can post their weekend's products available so consumers can plan and food waste is reduced. We support your lifestyle, our community
		and want to make your grocery shopping trip a bit hassle free. </div>
		</div>
		 

		
			<div className="about"> ABOUT 
				<div className="story"> Our Story </div>
				<div className="terms"> Privacy & Terms</div>
			</div>
			<div className="help"> HELP & CONTACT
				<div className="questions"> FAQ'S </div>
				<div className="email"> Email Us </div>			
			</div>
			<div className="getApp"> GET THE APP 
				<div className="appInfo"> Iphone & Android <br> </br> Coming Soon! </div>
			</div>
		

		<div className="ironyard"> Created by Maria Zamora for Iron Yard Front End Developer program </div>

	</div>
		);
	}

	


});

