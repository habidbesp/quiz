import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContex'
import { useHistory } from 'react-router-dom'

export default function ResetQuiz() {

    const { dispatchLimit, dispatch, dispatchNumber } = useContext(QuizContext)

    const history = useHistory()

    const handleClick = () => {
        dispatchLimit({
            type: "RESET_LIMIT"
        })

        dispatch({
            type: "FETCH_QUIZ_RESET",
            payload: []
        })

        dispatchNumber({
            type: "RESET_NUMBER"
        })

        history.push('/set_quiz')
    }

    return (
        <>
            <div className="pt-4 pb-5 pe-5">
                <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>Take Another Quiz</button>
            </div>
            
        </>
    )
}
