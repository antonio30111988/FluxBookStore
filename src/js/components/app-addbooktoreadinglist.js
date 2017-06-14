var React = require('react');
var AppActions = require('../actions/app-actions');

//create a AddBookToLibrary component
var AddBookToReadingList = React.createClass({
        handler: function(){
          AppActions.addBook(this.props.item)
        },
        render:function(){
          return <button onClick={this.handler}>I want to borrow </button>
        }

});


module.exports = AddBookToReadingList;
