import React, {useState, useEffect, useContext} from 'react'
import { ProgressBar } from 'react-bootstrap'
import { QuizContext } from '../context/QuizContex'

export default function Score({ userCorrectAnswers }) {

    const {quiz} = useContext(QuizContext)

    const [grade, setGrade] = useState('F')
    const [theme, setTheme] = useState('danger')
    const [final, setFinal] = useState('Failed')
    const [msg, setMsg] = useState('YO NEED TO STUDY MORE!')

    const average = () => {
        return Math.round((userCorrectAnswers / quiz.length) * 100) 
    }

    const avrString = () => {
        return `${average()}%`
    }

    useEffect(() => {
        
        if(average() < 50){
            setGrade('F')
            setTheme('danger')
            setFinal('Failed')
            setMsg('YOU NEED TO STUDY MORE!')
        }
        else if(average() >= 50 && average() < 60 ){
            setGrade('E')
            setTheme('warning')
            setFinal('Failed')
            setMsg('IT IS NOT AN F, IF THIS MAKES YOU FEEL BETTER!')
        }
        else if(average() >= 60 && average() < 70){
            setGrade('D')
            setTheme('warning')
            setFinal('Failed')
            setMsg('GOOD JOB, BUT NOT GOOD ENOUGH!')
        }
        else if(average() >= 70 && average() < 80 ){
            setGrade('C')
            setTheme('primary')
            setFinal('Failed')
            setMsg('ALMOUST THERE, GIVE IT ANOTHER CHANCE!')
        }
        else if(average() >= 80 && average() < 90 ){
            setGrade('B')
            setTheme('primary')
            setFinal('Passed')
            setMsg("IT'S NOT AN A BUT B IS ALSO GOOD!")
        }
        else if(average() >= 90 && average() < 100 ){
            setGrade('A')
            setTheme('success')
            setFinal('Passed')
            setMsg('EXCELLENT, BUT NOT PERFECT!')
        }
        else {
            setGrade('A+')
            setTheme('success')
            setFinal('Passed')
            setMsg("YOU'VE MASTERED THIS QUIZ, NOW YOU CAN GO TO PLAY FRISBEE!")
        }
    }, [userCorrectAnswers])
    
    return (
        <div className="container py-5">
            <div className="separator">Quiz Information</div>
            <div className="py-4">
                <h5 className={`text-${theme} fw-bolder`}>{msg}</h5>
            </div>
            <div className="row">
                <div className="form-group col-sm-6 col-xl-6">
                    <p className="text-center">
                        Score:
                        <span className={`text-${theme} ms-2`}>{avrString()}</span>
                        <br/>
                        Total questions: {quiz.length}
                        <br/>
                        Correct answers: {userCorrectAnswers}
                    </p>
                </div>
                <div className="form-group col-sm-6 col-xl-6">
                    <p className="text-center">
                        Topic: <code>JavaScript</code>
                        <br/>
                        Grade: 
                        <span className={`text-${theme} ms-2`}>{grade}</span>
                        <br/>
                        Final: 
                        <span className={`text-${theme} ms-2`}>{final}</span>
                    </p>
                </div>
            </div>

            <ProgressBar 
                animated 
                now={average()} 
                variant={theme} 
                label={avrString()}
            />
        </div>
    )
}
