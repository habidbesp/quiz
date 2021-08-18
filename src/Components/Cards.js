import React, {useState, useContext} from 'react'
import './Cards.css'
import Question from './Question'
import EnterCorrAnsw from './Lotties/EnterCorrAnsw/EnterCorrAnsw'
import { QuizContext } from '../context/QuizContex'

export default function Cards() {

    const { quiz } = useContext(QuizContext)
    
    const [id, setId] = useState('') 
    
    const handleClick = (e) => {
        setId(parseInt(e.target.id))
    }

    return (
        <>
        <div className="cards-container">
            <EnterCorrAnsw/>
            <div className="container  my-4">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {
                        quiz.map((item, i) => {
                            return <div key={i}>
                                <div className={ id === item.id ? 
                                    "card m-auto d-flex justify-content-center border-0 bg-primary text-white"
                                    :
                                    "card m-auto d-flex justify-content-center border-0 bg-light text-dark myHover"
                                } 
                                role="button" style={{ width:"100px", height:"50px", fontSize:"12px" }} id={item.id} onClick={handleClick}>
                                    Question<br></br> {i + 1}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        <Question
            id={id}
            setId={setId}
        /> 
        </>
    )
}
