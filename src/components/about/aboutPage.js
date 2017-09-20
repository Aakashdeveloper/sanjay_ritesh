"use strict"
var React = require('react');


var Home = React.createClass({
	  render:function(){
		 return (
			<div className="jumbotron">
				<h1> This is about</h1>
				
				<p> This is React Component</p>
			</div>
		 );
	} 
});

module.exports = Home;