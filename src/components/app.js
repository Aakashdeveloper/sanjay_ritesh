$ = jquery = require('jquery');
var React = require('react');
var Header = require('./comman/header');
var RouteHandler = require('react-router').RouteHandler


var App = React.createClass({
    render: function(){
        return(
            <div>
                <Header />
                <div className="container=fluid">
                    <RouteHandler/>
                </div>
            </div>
        )
    }
});
module.exports=App;

