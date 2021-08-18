
export default function UserAnswersReducer(state, action) {
    switch (action.type) {
        case "GET_USER_ANSWERS":
          return action.payload
        default:
          return state
        }
}
