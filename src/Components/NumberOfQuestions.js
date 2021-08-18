import React, { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Blogging from './Lotties/Blogging/Blogging'
import { QuizContext } from '../context/QuizContex'

export default function NumberOfQuestions() {

    const history = useHistory()

    // const { number, setNumber } = props

    const { dispatchLimit, dispatch, number, dispatchNumber } = useContext(QuizContext)

    const errorMsg = useRef()

    const handleSelect = (e) => {
        dispatch({
            type: "FETCH_QUIZ_RESET",
            payload: []
        })
        dispatchNumber({
            type: "GET_NUMBER",
            payload: e.target.value
        })
    }

    const handleClick = () => {
        if(!number || number === "Select number of questions:" ){
            errorMsg.current.innerText = "Select a number to continue! 👇"
            return 
        }
        dispatchLimit({
            type: "GET_LIMIT",
            payload: number
        })

        dispatchNumber({
            type: "RESET_NUMBER"
        })

        history.push('/quiz')
    }

    return (
        <div className="select-section">
            <div ref={errorMsg} className="text-danger fs-5 fw-bolder mb-4"></div>
            <div className="d-grid gap-2 col-sm-12 col-md-12 col-lg-6 mx-auto">
                <select className="form-select mb-3 rounded-pill" onChange={handleSelect}>
                    <option>Select number of questions:</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <button type="button" className="btn btn-outline-primary rounded-pill  fw-bolder" onClick={handleClick}>To Quiz</button>
            </div>
            <div className="mt-5">
                <Blogging />
            </div> 
        </div>
    )
}

