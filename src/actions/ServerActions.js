import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearch(data) {
  AppDispatcher.dispatch({
    type:'RECEIVE_SEARCH',
    payload: { data }
  })
}
}

export default ServerActions;
