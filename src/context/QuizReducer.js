
export default function QuizReducer(state, action) {
    switch (action.type) {
        case "FETCH_QUIZ_START":
          // console.log("Fetching quiz");
          return [...state]
        case "FETCH_QUIZ_SUCCESS":
          // console.log(action.payload);
          return [...state, ...action.payload]
        case "FETCH_QUIZ_RESET":
          // console.log(action.payload);
          return action.payload
        case "FETCH_QUIZ_FAILURE":
          const error = action.payload
          alert(`There was an error fetching trivia: ${error.message}. Please try again.`)
          return [...state]
        default:
          throw new Error();
        }
}
