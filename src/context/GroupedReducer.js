
export default function GroupedReducer(state, action) {
    switch (action.type) {
        case "GET_GROUPED":
          return action.payload;
        default:
          return state;
        }
}
