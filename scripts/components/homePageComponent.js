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
				<div className="homeheadhome"> Market List </div> 
				
				</div>

				<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
						<li data-target="#carousel-example-generic" data-slide-to="1"></li>
						<li data-target="#carousel-example-generic" data-slide-to="2"></li>
					</ol>
					 <div className="carousel-inner" role="listbox">
						<div className="item active">
							<img src="http://www.toptomatofoods.com/wp-content/uploads/2011/06/IMG_2531.jpg" alt="produce"/>
						 	<div className="carousel-caption">
								<div className="intro"> Find what you're looking for</div>
							</div>
						</div>
						<div className="item">
							<img src="https://torierynning.files.wordpress.com/2014/03/ballard-farmers-market-2.jpg" alt="rootveg"/>
							<div className="carousel-caption">
								<div className="intro"> Enjoy the season's freshest</div>
							</div>
						</div>
						<div className="item">
							<img src="https://gardenwarriorsgoodseeds.files.wordpress.com/2015/01/honeybottlesfarmersmarket_ab.jpg" alt="honey"/>
							<div className="carousel-caption">
								<div className="intro"> Support<br/> local communities </div>
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
		<div className="bottomlinehome"> </div>
		<a href="#findmarket" className="findMarketButton"> Find a market </a>
		<a href="#signup" className="signUpButton"> Vendor sign up </a>
	</div>
		);
	}

	


});

