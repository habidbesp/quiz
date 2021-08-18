
export default function LimitReducer(state, action) {
    switch (action.type) {
        case "GET_LIMIT":
          return action.payload
        case "RESET_LIMIT":
          return 1
        default:
          return state
        }
}
