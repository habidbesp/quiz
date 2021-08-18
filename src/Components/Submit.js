import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Submit() {

    const history = useHistory()
    
    const handleClick = () => {
        history.push('/result')
    }

    return (
        <>
            <div className="separator">Finish Quiz</div>
            <div className="submitBtn">
                <div className="d-grid gap-2">
                    <button className='btn btn-outline-success rounded-pill fw-bold' onClick={handleClick}>Submit Answers</button>
                </div>
            </div>
        </>
    )
}
