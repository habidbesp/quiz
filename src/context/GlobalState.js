import React, { useReducer } from 'react'
import QuizReducer from './QuizReducer'
import LimitReducer from './LimitReducer'
import NumberReducer from './NumberReducer'
import UserAnswersReducer from './UserAnswersReducer'
import GroupedReducer from './GroupedReducer'
import { QuizContext } from './QuizContex'

export default function GlobalState(props) {

    const [quiz, dispatch] = useReducer(QuizReducer, [])
    const [limit, dispatchLimit] = useReducer(LimitReducer, 1)
    const [number, dispatchNumber] = useReducer(NumberReducer, '')
    const [userAnswers, dispatchUserAnswers] = useReducer(UserAnswersReducer, [])
    const [grouped, dispatchGrouped] = useReducer(GroupedReducer, {})
    return (
        <>
          <QuizContext.Provider
            value= {
                {
                    quiz: quiz,
                    dispatch: dispatch,
                    limit: limit,
                    dispatchLimit: dispatchLimit,
                    number: number,
                    dispatchNumber: dispatchNumber,
                    userAnswers: userAnswers,
                    dispatchUserAnswers: dispatchUserAnswers,
                    grouped: grouped,
                    dispatchGrouped: dispatchGrouped
                }  
            }
          >
            {props.children}
          </QuizContext.Provider>  
        </>
    )
}
