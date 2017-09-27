var React = require('react');
var Router = require('react-router');
var Link = Router.link

var Header = React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/react.png"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">contact</Link></li>
                         <li><Link to="authors">Authors</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports =Header;