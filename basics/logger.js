//NODE.JS TUTORIAL FOR BEGNINNERS: LEARN NODE IN 1 HOUR | MOSH
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
	log(message) {
	    //SEND AN HTTP REQUEST
	    console.log(message);

	    //Raise an event
		this.emit('messageLogged', {id: 1, url: 'http://'});
	}
}

module.exports = Logger;