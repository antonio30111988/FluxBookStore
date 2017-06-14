var React = require('react');
var ReactDOM = require('react-dom');

var BookList = require('./app-booklist');
var ReadingList = require('./app-readinglist');
//create a App component
var App = React.createClass({
	render:function(){
	  return <div><h1>Book List</h1><BookList /><h1>Reading List</h1><ReadingList /></div>
	}

}); 


module.exports = App;
