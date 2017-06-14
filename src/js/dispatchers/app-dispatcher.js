//dispacthing action to Store
//dispatchers: registry of all action callbacks
//
/*The dispatcher has the capability to invoke the callbacks in the order specified, and it waits for
other updates (waitFor() method does that).
In the flux library (npm install flux) node_module, the register() and dispatch()
methods are defined, in the flux library_app, within the dispatcher class. */

var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

//handleViewAction method - passes the action to be passed to the registered store via
//the callback.
var AppDispatcher = assign(new Dispatcher(),{
	handleViewAction: function(action){
		console.log('action',action);
		this.dispatch ({
			source: 'VIEW_ACTION',
			action: action
		})
	}
});

module.exports = AppDispatcher;
