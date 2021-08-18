import React, { useEffect, useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import NextBack from './NextBack';
import Submit from './Submit';
import { QuizContext } from '../context/QuizContex'

export default function Question({ id, setId }) {

    const { quiz, userAnswers, dispatchUserAnswers } = useContext(QuizContext)

    const ids = quiz.map(item => {
        return item.id
    })

    const currentIndexId = ids.indexOf(id)
    
    const [prevNext, setPrevNext] = useState(currentIndexId)
    
    useEffect(()=> {
        setPrevNext(currentIndexId)
    }, [currentIndexId])

    useEffect(()=> {
        setId(ids[prevNext])
    }, [prevNext])
    
    const handleChange = (e) => {
    
        const tempState = userAnswers.find(item => {
            return item.id.toString() === e.target.id
        })

        if(tempState){
            let tempArr = userAnswers.map(item=> {
                if(e.target.id === item.id.toString()){
                    return {
                        ...item, [e.target.name]: e.target.checked
                    }
                }
                else {
                    return item
                }
                
            })
            dispatchUserAnswers({
                type: "GET_USER_ANSWERS",
                payload: tempArr
            })
            
        }
    }

    const filteredData = quiz.filter(item => {
        return item.id === id; 
    }) 
    
    const filteredCheckBox = userAnswers.filter(item => {
        return item.id === id
    })

    return (
        <>
            {
                filteredData.map((item) => {
                    return <div key={item.id} className="questionContainer">
                        <div className="separator">Question {item.nrQuestion}</div>
                        <Card
                            bg=''
                            text=''
                            className=" my-4 border-0 m-auto col-sm-12 col-md-10 col-lg-8"
                        >
                            <Card.Header className="border-0 text-start bg-primary text-white rounded-3">{item.question}</Card.Header>
                            <Card.Body>
                                {
                                    !item.answers.answer_a ?
                                        ""
                                        :
                                        <div className="d-flex justify-content-start align-items-center my-2">
                                            {
                                                filteredCheckBox.length === 0 ?
                                                    <input type="checkbox" name="answer_a_correct" id={item.id} onChange={handleChange} />
                                                    :
                                                    filteredCheckBox.map(item => {
                                                        return <input type="checkbox" key={item.id} checked={item.answer_a_correct} name="answer_a_correct" id={item.id} onChange={handleChange} />
                                                    })
                                            }
                                            <label className="ms-2"><code>{item.answers.answer_a}</code></label>
                                        </div>
                                }
                                {
                                    !item.answers.answer_b ?
                                        ""
                                        :
                                        <div className="d-flex justify-content-start align-items-center my-2">
                                            {
                                                filteredCheckBox.length === 0 ?
                                                    <input type="checkbox"  name="answer_b_correct" id={item.id} onChange={handleChange} />
                                                    :
                                                    filteredCheckBox.map(item => {
                                                        return <input type="checkbox" key={item.id} checked={item.answer_b_correct} name="answer_b_correct" id={item.id} onChange={handleChange} />
                                                    })
                                            }
                                            <label className="ms-2"><code>{item.answers.answer_b}</code></label>
                                        </div>
                                }
                                {
                                    !item.answers.answer_c ?
                                        ""
                                        :
                                        <div className="d-flex justify-content-start align-items-center my-2">
                                            {
                                                filteredCheckBox.length === 0 ?
                                                    <input type="checkbox" name="answer_c_correct" id={item.id} onChange={handleChange} />
                                                    :
                                                    filteredCheckBox.map(item => {
                                                        return <input type="checkbox" key={item.id} checked={item.answer_c_correct} name="answer_c_correct" id={item.id} onChange={handleChange} />
                                                    })
                                            }
                                            <label className="ms-2"><code>{item.answers.answer_c}</code></label>
                                        </div>
                                }
                                {
                                    !item.answers.answer_d ?
                                        ""
                                        :
                                        <div className="d-flex justify-content-start align-items-center my-2">
                                            {
                                                filteredCheckBox.length === 0 ?
                                                    <input type="checkbox" name="answer_d_correct" id={item.id} onChange={handleChange} />
                                                    :
                                                    filteredCheckBox.map(item => {
                                                        return <input type="checkbox" key={item.id} checked={item.answer_d_correct} name="answer_d_correct" id={item.id} onChange={handleChange} />
                                                    })
                                                
                                            }
                                            <label className="ms-2"><code>{item.answers.answer_d}</code></label>
                                        </div>
                                }
                                {
                                    !item.answers.answer_e ?
                                        ""
                                        :
                                        <div className="d-flex justify-content-start align-items-center my-2">
                                            {
                                                filteredCheckBox.length === 0 ?
                                                    <input type="checkbox" name="answer_e_correct" id={item.id} onChange={handleChange} />
                                                    :
                                                    filteredCheckBox.map(item => {
                                                        return <input type="checkbox" key={item.id} checked={item.answer_e_correct} name="answer_e_correct" id={item.id} onChange={handleChange} />
                                                    })
                                            }
                                            <label className="ms-2"><code>{item.answers.answer_e}</code></label>
                                        </div>
                                }
                                {
                                    !item.answers.answer_f ?
                                        ""
                                        :
                                        <div className="d-flex justify-content-start align-items-center my-2">
                                            {
                                                filteredCheckBox.length === 0 ?
                                                    <input type="checkbox" name="answer_f_correct" id={item.id} onChange={handleChange} />
                                                    :
                                                    filteredCheckBox.map(item => {
                                                        return <input type="checkbox" key={item.id} checked={item.answer_f_correct} name="answer_f_correct" id={item.id} onChange={handleChange} />
                                                    })
                                                
                                            }
                                            <label className="ms-2"><code>{item.answers.answer_f}</code></label>
                                        </div>
                                }
                            </Card.Body>
                        </Card>
                        <NextBack
                            ids={ids}
                            prevNext={prevNext}
                            setPrevNext={setPrevNext}
                        />
                        <Submit />
                    </div>
                })
            }

        </>
    )
}
