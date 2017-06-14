//recieve dispatched actions and act according to registered callbacks on that received actions
//STORE: like Model in MVC arhitecture
//"Stores manage the state of many objects—they do not
//represent a single record of data like ORM models do"
//The action is acted upon within stores by the state update.

//Store comutitional logic all writeen in functions
var AppDispatcher = require('../dispatchers/app-dispatchers');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');

//NodeJS CLASS -collect all events in one container, and on emit() all function callesd
//functions are asave by eventEmmiter.on(event, fucntion to save)
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

//JS arrays: _library and _readingItems store the books available and what the reader wants
//to read.

var _library = [];

for(var i=1; i<9; i++){
  _library.push({
    'id': 'Book_' + i,
    'title':'Harry Potter Story ' + i,
    'description': 'Harry Potter Part '+i
  });
}

var _readingItems = [];

//crud functions
//
//delete
function _removeItem(index){
  _readingItems[index].inReadingList = false;
  _readingItems.splice(index, 1);
}

//increase number items quantity
function _increaseItem(index){
  _readingItems[index].qty++;
}

//decresase number items quantity
function _decreaseItem(index){
  if(_readingItems[index].qty>1){
    _readingItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}

//create
function _addItem(item){
  //if not already in list
  if(!item.inReadingList){
    //set init qty
    item['qty'] = 1;
    item['inReadingList'] = true;
    //add to list
    _readingItems.push(item);
  }
  else {
    //if already in list increase number of same items to read more times when found that book by id
    _readingItems.forEach(function(cartItem, i){
      if(cartItem.id===item.id){
        _increaseItem(i);
      }
    });
  }
}

//MAIN APP STORE
var AppStore = assign(EventEmitter.prototype, {
  emitChange: function(){
    //call all fucntion queued for emmitting
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    //eventEmmit.on ()
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  //get books for reAD
  getReadingList: function(){
    return _readingItems
  },
  //get available books
  getLibrary: function(){
    return _library
  },

//dispatcherIndex is used in order to store the return value of the
//dispatcher's registration method.
//sore find callback registered by each action and execute to update state change later oon reducer
//dispatcherIndex is used in case of waitFor() method, that is when one part of the app has to wait
//for another part of the app to get updated.
  dispatcherIndex: AppDispatcher.register(function(payload){
    //determine type of action
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case AppConstants.ADD_BOOK:
        _addItem(payload.action.item);
        break;

      case AppConstants.DELETE_BOOK:
        _removeItem(payload.action.index);
        break;

      case AppConstants.INC_BOOK_COUNT:
        _increaseItem(payload.action.index);
        break;

      case AppConstants.DEC_BOOK:
        _decreaseItem(payload.action.index);
        break;
    }

    AppStore.emitChange();

    return true;
  })

})

module.exports = AppStore;
