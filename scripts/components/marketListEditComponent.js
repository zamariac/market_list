var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backparse');

var userModel = require('../models/userModel');
var produceModel = require('../models/produceModel');

module.exports = React.createClass({
	componentWillMount: function(){
		var self = this;
		this.props.user.on("userLoad",function(){
			self.refs.vendorName.getDOMNode().value = self.props.user.get('vendorName');
			self.setState({vendorPhoto:self.props.user.get('vendorPhoto')});
			produceCollection.fetch();
		});
	},
	render: function(){
		console.log(this.props.user);
		return (
			<form onSubmit={this.userLoad}>
				<div> 
					<div>
						<a href="#login" className="logInButton"> Log in </a>
							<div className="headerwraphome"> 
							<a href="#home" className="homeheadhome"> MARKET LIST </a> 
							</div>
						<div className="marketlistVendorName" ref="vendorName"> {this.props.user.get('vendorName')} </div>
						<div className="marketlistVendorPhoto" ref="vendorPhoto"> <img src={this.props.user.get('vendorPhoto')}/> </div>
					</div>	
						<table className="table table-bordered">
							<thead className="tablehead">
								<tr>
									<th className ="head">#</th>
									<th className ="head"> Item </th>
									<th className ="head"> Weight </th>
									<th className ="head"> Price </th>
									<th className ="head"> Edit </th>
									<th className ="head"> Save </th>

								</tr>
							</thead>
							<tbody className="tablebody">
								<tr className="tablerow">
									<th  scope="row">1</th>
									<td className ="row"> 
										<input type="produceText" ref="produceName"> {this.props.user.get('produceName')} </input> 
									</td>
									<td className ="row"> 
										<input type="produceText" ref="produceWeight"> {this.props.user.get('produceWeight')} </input> 
									</td>
									<td className ="row"> 
										<input type="produceText" ref="producePrice"> {this.props.user.get('producePrice')} </input>
									</td>
									<td className ="row"> 
										<button> Edit </button>
									</td>
									<td className ="row"> 
										<button> Save </button>
									</td>	
								</tr>
							</tbody>
						</table>
				</div>
			</form>

			);
	},

	userLoad: function(e){
		e.preventDefault();

		var self = this;

		this.props.user.set({vendorName: this.refs.vendorName.getDOMNode().value});
		this.props.user.set({vendorPhoto: this.state.vendorPhoto});
		
		},


	editList: function(e){
		e.preventDefault();

		var self = this;

		this.props.user.set({produceName: this.refs.produceName.getDOMNode().value});
		this.props.user.set({produceWeight: this.refs.produceName.getDOMNode().value});
		this.props.user.set({producePrice: this.refs.producePrice.getDOMNode().value});

	
	},


	


})







