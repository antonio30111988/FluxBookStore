var React = require('react');
var AppActions = require('../actions/app-actions');

//create a DeleteBookFromLibrary component
var DeleteBookFromReadingList = React.createClass({
        handler: function(){
          AppActions.deleteBook(this.props.index)
        },
        render:function(){
          return <button onClick={this.handler}>Book Completed</button>
        }

});


module.exports = DeleteBookFromReadingList;
