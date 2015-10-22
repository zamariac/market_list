var React = require('react');
var foundMarket = require('../collections/userCollection');

module.exports = React.createClass({
	componentWillMount: function(){
		var self = this;
		this.props.vendors.on('sync', function(){
			self.forceUpdate()
		});
	},

	render: function() {
			var postMarketLocation = this.props.vendors.map(function(userModel){
			return (
				<div key={userModel.cid}> 
					<h3>{userModel.get('vendorName')}</h3>
					<p>{userModel.get('body')}</p>
					<p><a href={'#foundMarket/'+userModel.get('vendorLocation')}>{userModel.get('vendorLocation')}</a></p>
				</div>
			);
		});
		return (
			<div className="row">
			<a href="#home" className="homeheadhome"> MARKET LIST </a> 
				<div className="col-sm-6 col-sm-offset-3">
					{postMarketLocation}
				</div>
			
			</div>
		);

	}
});