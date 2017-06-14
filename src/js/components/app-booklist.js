var React = require('react');
var AppStore = require('../stores/app-stores');
var AddBookToReadingList = require('./app-addbooktoreadinglist')

function getLibrary(){
  return {items: AppStore.getLibrary()}
}

var BookList = React.createClass({
  getInitialState:function(){
    return getLibrary()
  },
  render:function(){
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

