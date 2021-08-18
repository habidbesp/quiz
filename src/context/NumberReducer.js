
export default function NumberReducer(state, action) {
    switch (action.type) {
        case "GET_NUMBER":
          return action.payload
        case "RESET_NUMBER":
          return ''
        default:
          return state
        }
}
