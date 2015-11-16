var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');


module.exports = React.createClass({
	render: function(){
		return(
			<form>	
				<div className="headerwraphome">
					<a href="#home" className="homeButton"> Home </a> 
					<a href="#home" className="homeheadhome"> MARKET LIST </a>
					<div className="marginTop"></div> 
				</div>

				<div className="container">
					<div className="row">
								<a href="#foundmarket/hope" className="title">Hope Farmers Market</a>  
  							<div className="col-xs-6"> 
								<a href="#foundmarket/hope" className="hope">
									<img className= "img-responsive" src="http://www.hungersauce.com/wp-content/uploads/2013/03/Saltillo.jpg"/>
								</a>
							</div>
							<div className="col-xs-6"> 
									<div className="address"> Sundays 10 am to 3pm <br> </br>412 Comal St <br> </br>  Austin, TX 78702</div>
							</div>
						</div>
					<div className="row">
								<div className="title">Mueller TFM</div>
							<div className="col-xs-6"> 
								<a href="#foundmarket/mueller" className="mueller">
									
									<img className= "img-responsive" src="http://tours.tourfactory.com/tours/media/scene/big2/00/19/23/32/19233219.jpg"/>
								</a>
							</div>
							<div className="col-xs-6"> 	
									<div className="address"> Sundays  10 am to 2pm <br> </br> 4550 Mueller Blvd <br> </br> Austin, Texas 78723 </div>
							</div>
							</div>
					<div className="row two">
					<div className="row">
								<div className="title">Domain TFM</div> 
							<div className="col-xs-6"> 
								<a href="#foundmarket/domain" className="domain"> 
									<img className= "img-responsive" src="http://texasfarmersmarket.org/wp-content/uploads/2015/04/TFMatDomain_location-615x346.jpg"/>
								</a>
							</div>
								<div className="col-xs-6"> 
									<div className="address"> Sundays 10 am to 2 pm <br> </br>11410 Century Oaks Terrace <br> </br> Austin, TX 78758 </div>
								</div>
							</div>
					<div className="row">
								<div className="title">Lakeline TFM</div>
							<div className="col-xs-6"> 
								<a href="#foundmarket/lakeline" className="lakeline"> 
									
									<img className= "img-responsive" src="http://texasfarmersmarket.org/wp-content/uploads/2012/04/cedarparkmkt_rooftop_01-980x654.jpg"/>
								</a>
							</div>	
								<div className="col-xs-6"> 
									<div className="address"> Saturdays 9 am to 1pm <br> </br>11200 Lakeline Mall Drive <br> </br> Cedar Park, Texas 78613 </div>
								</div>
							</div>
						</div>
					</div>

				<div className="bottomline"> </div>
			</form>

			)
	}



	


});