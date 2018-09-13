import InitialState from "../store/store";

function Reducer(state = InitialState, action) {
  switch (action.type) {
    case "locks":
      let Locks = Object.assign({}, state, {
        locks: action.locks,
        status: action.status
      });
      return Locks;
      break;
    case "unlock":
      let UnlocK = Object.assign({}, state, {
        status: action.status
      });
      return UnlocK;
    default:
      return state;
  }
}

export default Reducer;
