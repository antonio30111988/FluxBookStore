var React = require('react');
var AppActions = require('../actions/app-actions');

//create a DeleteBookFromLibrary component
var DeleteBookFromReadingList = React.createClass({
        handler: function(){
        	//acrion for deleteing from reading list
          AppActions.deleteBook(this.props.index)
        },
        render:function(){
          return <button onClick={this.handler}>Mark As Read</button>
        }

});


module.exports = DeleteBookFromReadingList;
