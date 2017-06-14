var React = require('react');
var AppStore = require('../stores/app-stores.js');
var RemoveFromReadingList = require('./app-removefromreadinglist');

function readingItems(){
  return {items: AppStore.getReadingList()}
}

var ReadingList = React.createClass({
  getInitialState:function(){
    return readingItems()
  },
  componentWillMount:function(){
    AppStore.addChangeListener(this._onChange)
  },
  _onChange: function(){
    this.setState(readingItems())
  },
  render:function(){
    var total = 0;
    var items = this.state.items.map(function(item, i){
      return (
          <tr key={i}>
            <td><RemoveFromReadingList index={i} /></td>
            <td>{item.title}</td>
            <td>{item.qty}</td>
          </tr>
      );
    })
    return (
      <table className="table table-hover">
          <thead>
              <tr>
                <th></th>
                <th>Book Name</th>
                <th>Qty</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
    )
  }
});

module.exports = ReadingList
