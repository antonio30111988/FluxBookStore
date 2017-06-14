var React = require('react');
var AppStore = require('../stores/app-stores');
var AddBookToReadingList = require('./app-addbooktoreadinglist')

//get availabkle books for readingand set to initaila state
function getLibrary(){
  return {items: AppStore.getLibrary()}
}

var BookList = React.createClass({
  getInitialState:function(){
    //set initiačl available books list displayed
    return getLibrary()
  },
  render:function(){
    //foreach available book
    //pass itme object to addbOkk for borrow function in AddBookTpReadingList componen
    var items = this.state.items.map(function(item){
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td><AddBookToReadingList item={item} /></td>
        </tr>
      );
    })
    return (
      <table className="table table-hover">
        {items}
      </table>
    )
  }
});

module.exports = BookList;

