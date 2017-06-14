var React = require('react');
var ReactDOM = require('react-dom');

//call the AppActions directly, before creation of the Store
var AppActions = require('../actions/app-actions');

//create a App component
var App = React.createClass({
	handler: function(){
		//add book on click
		AppActions.addBook('This is the book..Sherlock Holmes')
	},
	render:function(){
		return <h1 onClick={this.handler}> Flux Book Store </h1>
	}
});

module.exports = App;
