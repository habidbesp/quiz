import React, { useContext } from 'react'
import './QuestionsResult.css'
import WrongRandomAnim from './Lotties/WrongRandomAnim/WrongRandomAnim';
import CorrectRandomAnim from './Lotties/CorrectAnims/CorrectRandomAnim';
import { Card, CardColumns } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContex'


export default function QuestionsResult() {
    
    const {quiz, grouped} = useContext(QuizContext)

    return (
        <>
        <div className="separator">Your Answers</div>

        <CardColumns className="py-5">
            {
                quiz.map(item => {
                    return <Card border='light' className="text-center" key={item.id}>
                        <Card.Body>
                        <div className='d-flex justify-content-center align.items-center mt-3'>{grouped[item.id][2].checkIfCorrect === "correct" ?
                            <CorrectRandomAnim
                                width={150}
                            />
                            :
                            <WrongRandomAnim
                                width={150}
                            />
                        }</div>
                        <Card.Subtitle className='mt-5 '>Question {item.nrQuestion}</Card.Subtitle>
                        <Card.Text className='mt-3 mb-5'>{item.question}</Card.Text>
                        <div className="px-4 col-md-12 gap-y row m-auto">
                            {
                                [
                                    'Primary',
                                    'Info'
                                ].map((variant, idx) => (
                                  <Card
                                    bg={variant.toLowerCase()}
                                    key={idx}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    className={`cards-compare col-md-6`}
                                  >
                                  
                                  <Card.Body className='p-4'>
                                    {
                                        variant === 'Primary' ?
                                            <Card.Subtitle className="mb-5">Your Answers</Card.Subtitle>
                                            :
                                            <Card.Subtitle className="mb-5">Correct Anwers</Card.Subtitle>
                                    }
                                    {
                                        !item.answers.answer_a ?
                                            ""
                                            :
                                            <Card.Text className="text-start">
                                                {
                                                    variant === 'Primary' ?
                                                        grouped[item.id][1].answer_a_correct ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                        :
                                                        item.correct_answers.answer_a_correct === 'true' ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                }
                                                <span className="ms-3">{item.answers.answer_a}</span> 
                                            </Card.Text>
                                    }
                                    {
                                        !item.answers.answer_b ?
                                            ""
                                            :
                                            <Card.Text className="text-start">
                                                {
                                                    variant === 'Primary' ?
                                                        grouped[item.id][1].answer_b_correct ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                        :
                                                        item.correct_answers.answer_b_correct === 'true' ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                }
                                                <span className="ms-3">{item.answers.answer_b}</span> 
                                            </Card.Text>
                                    }
                                    {
                                        !item.answers.answer_c ?
                                            ""
                                            :
                                            <Card.Text className="text-start">
                                                {
                                                    variant === 'Primary' ?
                                                        grouped[item.id][1].answer_c_correct ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                        :
                                                        item.correct_answers.answer_c_correct === 'true' ?
                                                            '✅'
                                                            :
                                                            '❌'

                                                }
                                                <span className="ms-3">{item.answers.answer_c}</span> 
                                            </Card.Text>
                                    }
                                    {
                                        !item.answers.answer_d ?
                                            ""
                                            :
                                            <Card.Text className="text-start">
                                                {
                                                    variant === 'Primary' ?
                                                        grouped[item.id][1].answer_d_correct ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                    
                                                        :
                                                        item.correct_answers.answer_d_correct === 'true' ?
                                                            '✅'
                                                            :
                                                            '❌'

                                                }
                                                <span className="ms-3">{item.answers.answer_d}</span> 
                                            </Card.Text>
                                    }
                                    {
                                        !item.answers.answer_e ?
                                            ""
                                            :
                                            <Card.Text className="text-start">
                                                {
                                                    variant === 'Primary' ?
                                                        grouped[item.id][1].answer_e_correct ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                        :
                                                        item.correct_answers.answer_e_correct === 'true' ?
                                                            '✅'
                                                            :
                                                            '❌'

                                                }
                                                <span className="ms-3">{item.answers.answer_e}</span> 
                                            </Card.Text>
                                    }
                                    {
                                        !item.answers.answer_f ?
                                            ""
                                            :
                                            <Card.Text className="text-start">
                                                {
                                                    variant === 'Primary' ?
                                                        grouped[item.id][1].answer_f_correct ?
                                                            '✅'
                                                            :
                                                            '❌'
                                                        :
                                                        item.correct_answers.answer_f_correct === 'true' ?
                                                            '✅'
                                                            :
                                                            '❌'

                                                }
                                                <span className="ms-3">{item.answers.answer_f}</span> 
                                            </Card.Text>
                                    }
                                    
                                  </Card.Body>
                                </Card>
                                ))
                            }
                        </div>

                        <Card.Title 
                            className={
                                grouped[item.id][2].checkIfCorrect === "correct" ?
                                    "text-success mt-5 mb-4 fw-bolder"
                                    :
                                    "text-danger mt-5 mb-4 fw-bolder"
                                }
                            >
                            {grouped[item.id][2].checkIfCorrect.toUpperCase()}
                        </Card.Title>

                        </Card.Body>
                    </Card>
                })
            }
        </CardColumns>
        </>
    )
}
