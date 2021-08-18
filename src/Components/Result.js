import React, {useState, useEffect, useContext} from 'react'
import Score from './Score'
import QuestionsResult from './QuestionsResult'
import { QuizContext } from '../context/QuizContex'

export default function Result() {

    const { quiz, limit, grouped } = useContext(QuizContext)
    const [userCorrectAnswers, setUserCorrectAnswers] = useState(0)

    useEffect(() => {
        const rightAnswers = () => {

            quiz.forEach( item => {
                if(JSON.stringify(grouped[item.id][0]) === JSON.stringify(grouped[item.id][1])){
                    setUserCorrectAnswers((prevState)=> {
                        return prevState + 1
                    })
                    grouped[item.id][2].checkIfCorrect = "correct"
                } 
                else{
                    grouped[item.id][2].checkIfCorrect = "wrong"  
                }
            });
        }
        rightAnswers()

    }, [grouped])

    return (
        <div>
            {
                limit < 5 ?
                    ""
                    :
                <Score
                    userCorrectAnswers={userCorrectAnswers}
                />
            }
            {
                limit < 5 ?
                    ""
                    :
                    <QuestionsResult />
            }
        </div>
    )
}
