var React = require('react');
var $ = require('jQuery');
window.jQuery = $;
require('bootstrap/js/carousel.js');

module.exports = React.createClass({
	render: function(){
		return (
			<div ref="carousel-example-generic" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
				</ol>
				 <div className="carousel-inner" role="listbox">
					<div className="item active">
						<img src="http://travelfruitlove.com/wp-content/uploads/2014/07/farmersmarket21.jpg" alt="produce"/>
					 	<div className="carousel-caption">
							Market List
						</div>
					</div>
					<div className="item">
						<img src="http://farmandranchfreedom.org/wp-content/uploads/2013/03/farmers-market-jars.jpg" alt="honey"/>
						<div className="carousel-caption">
							Locate
						</div>
					</div>
					...
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
		);
	}

	componentDidMount()
	$('.carousel').carousel()


});