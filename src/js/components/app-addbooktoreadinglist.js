var React = require('react');
var AppActions = require('../actions/app-actions');

//create a AddBookToLibrary component
var AddBookToReadingList = React.createClass({
        handler: function(){
        	//call action then action  dispacthed  to add book
          AppActions.addBook(this.props.item)
        },
        //borrow book functionality
        render:function(){
          return <button onClick={this.handler}>Borrow book. </button>
        }

});


module.exports = AddBookToReadingList;
