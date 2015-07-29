var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');


module.exports = React.createClass({
	render: function(){
		return(
			<form>	
				<div className="headerwrap">
					<a href="#home" className="homeButton"> Home </a> 
					<div className="marginTop"></div>
					<div className="homehead"> Market List </div> 
				</div>

				<div className="container">
					<div className="row">
  							<div className="col-sm-6"> 
								<a href="#foundmarket/hope" className="hope"> 
									<img className= "img-responsive" src="http://www.scrumptiouschef.com/food/wp-content/uploads/2014/03/hope.jpg"/>
									<div className="title">Hope Farmers Market</div>
								</a>
							</div>
							<div className="col-sm-6"> 
								<a href="#foundmarket/mueller" className="mueller">
									<img className= "img-responsive" src="http://tours.tourfactory.com/tours/media/scene/big2/00/19/23/32/19233219.jpg"/>
									<div className="title">Mueller TFM</div>
								</a>
							</div>
					</div>
					<div className="row">
							<div className="col-sm-6"> 
								<a href="#foundmarket/domain" className="domain">  
									<img className= "img-responsive" src="http://texasfarmersmarket.org/wp-content/uploads/2015/04/TFMatDomain_location-615x346.jpg"/>
									<div className="title">Domain TFM</div>
								</a>
							</div>
							<div className="col-sm-6"> 
								<a href="#foundmarket/lakeline" className="lakeline"> 
									<img className= "img-responsive" src="http://texasfarmersmarket.org/wp-content/uploads/2012/04/cedarparkmkt_rooftop_01-980x654.jpg"/>
									<div className="title">Lakeline TFM</div>
								</a>
							</div>
					</div>
				</div>

				<div className="bottomline"> </div>
			</form>

			)
	}



	


});