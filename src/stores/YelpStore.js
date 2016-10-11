import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _searchResults = null;

class YelpStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH':
        _searchResults = action.payload.data;
        // console.log('searchResults in store', _searchResults);
        this.emit('CHANGE');
        break;

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getAll() {
    return _searchResults;
  }
}

export default new YelpStore;
