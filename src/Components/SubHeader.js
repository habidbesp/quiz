import React from 'react'
import { Link } from 'react-router-dom'
import InicialAnim from './Lotties/InicialAnim/InicialAnim';

export default function SubHeader() { 
    return (
        <div className="SubHeader">
            <h5 className="fw-light text-dark lh-lg">Test your knowledge with these handpicked questions. The most frequently asked ones in job interviews and head hunting. If you can get 100% on this quiz, you'll be ready for your next job!</h5>
            <div className='py-3'>
                <div className="mb-5">
                    <InicialAnim/>
                </div>
                <Link to='/quiz/set_quiz' className="text-decoration-none fs-3">👉 Start Quiz</Link>
            </div>
        </div>
    )
}
