var React = require('react');
var AppStore = require('../stores/app-stores.js');
//mark books aread and remobve form list
var RemoveFromReadingList = require('./app-removefromreadinglist');

//get reading list array
function readingItems(){
  return {items: AppStore.getReadingList()}
}

var ReadingList = React.createClass({
  getInitialState:function(){
    //set to initial display of reading list of books
    return readingItems()
  },
  //add change listener before content is rendered
  componentWillMount:function(){
    AppStore.addChangeListener(this._onChange)
  },
  _onChange: function(){

    this.setState(readingItems())
  },
  render:function(){
    var total = 0;
    //its book for lead item in table tr displayed
    //iniue key, and index passed as book identificator
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
