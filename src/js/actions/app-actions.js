var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatchers');

var AppActions = {
	addBook:function(item){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_BOOK,
			item: item
		})
	},
	removeBook:function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_BOOK,
			index: index
		})
	},
	incBookCount:function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.INC_BOOK_COUNT,
			item: index
		})
	},
	decBookCount:function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.DEC_BOOK_COUNT,
			item: index
		})
	}
} 
module.exports = AppActions;