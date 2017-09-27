var React = require('react');
var Router = require('react-router');
var DefaultRoute = Route.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute =Router.NotFoundRoute;



var routes =(
    <Route name="app" path="/" handler={require('./component/app')}>
      <DefaultRoute handler={require('./components/homePage')}/>
      <Route name="authors"  handler={require('./components/authors/authorPage')} />
      <Route name="about"  handler={require('./components/about/aboutPage')} />
      <Redirect from="about/:id" to="about" />

     </Route>
    );
module.exports = routes;