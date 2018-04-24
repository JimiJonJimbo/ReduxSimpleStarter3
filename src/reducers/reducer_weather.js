import { FETCH_WEATHER } from '../actions/index';

// The initial state is an array because we will have a list of
// cities.
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // DON'T DO
    // return state.push(action.payload.data);
    // because you never manipulate state directly! Even in Redux.
    // You return a completely new instance of state. So do this:
    // return state.concat([action.payload.data]);
    // OR you can do this:
    return [ action.payload.data, ...state ];
  }
  return state;
}
