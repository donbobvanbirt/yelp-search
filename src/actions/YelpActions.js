import API from '../API'

const YelpActions = {
  search(name, location) {
    API.search(name, location);
  }
}

export default YelpActions;
