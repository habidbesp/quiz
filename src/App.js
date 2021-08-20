import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import Result from './Components/Result';
import Cards from './Components/Cards';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import NumberOfQuestions from './Components/NumberOfQuestions';
import Footer from './Components/Footer';
import { QuizContext } from './context/QuizContex'

function App() {
  
  const location = useLocation()

  const apiToken = process.env.REACT_APP_TOKEN;

  const{ quiz, dispatch, limit, number, userAnswers, dispatchUserAnswers, dispatchGrouped } = useContext(QuizContext)

  const [correctAnswers, setCorrectAnswers] = useState([])
  const [toBooleans, setToBooleans] = useState([])
  const [checkIfCorrect, setCheckIfCorrect] = useState([])

  quiz.map((item, i) => {
    item.nrQuestion = i + 1
    return item
  })

  useEffect(() => {
    const questions = async () => {
      dispatch({ type: "FETCH_QUIZ_START" })
      try {
        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiToken}&limit=${number}&tags=JavaScript`)
        const data = await response.json()
        dispatch({ 
          type: "FETCH_QUIZ_SUCCESS",
          payload: data
       })
      }
      catch (error) {
        dispatch({ 
          type: "FETCH_QUIZ_FAILURE", 
          payload: error
        })
      }
    }

    if(!number || number === ""){
      return
    }
    else{
      questions()
    }
  }, [number])
  

  useEffect(() => {
    const getCorrectAnsw = () => {
      const correct = quiz.map(item => {
        item.correct_answers.id = item.id;
        return item.correct_answers
      })
      return correct
    }
    setCorrectAnswers(getCorrectAnsw())
    
    const extractUserAnsw = () => {
      let answArr = []
      quiz.forEach(item => {
        let objAnsw = {
          answer_a_correct: false,
          answer_b_correct: false,
          answer_c_correct: false,
          answer_d_correct: false,
          answer_e_correct: false,
          answer_f_correct: false,
          id: item.id
        }
        answArr.push(objAnsw);
      })
      return answArr;
    }
    dispatchUserAnswers({
      type: "GET_USER_ANSWERS",
      payload: extractUserAnsw()
    })
    
    const wrongCorrect = () => {
      let wrongCorrectArr = []
      quiz.forEach(item=> {
        let obj = {
          id: item.id,
          checkIfCorrect: "wrong"
        }
        wrongCorrectArr.push(obj)
      })
      return wrongCorrectArr
    }

    setCheckIfCorrect(wrongCorrect())
  }, [quiz])

  useEffect(()=>{
    const transformToBooleans = () => {
      const nestedArr = []
      correctAnswers.forEach(item => {
        let booleanObj = []
        for(let key in item){
          if(item[key] === "true"){
            booleanObj.push({[key] : true}) 
          }
          
          if(item[key] === "false"){
            booleanObj.push({[key] : false})
          }
        }
        booleanObj.push({
          id: item.id
        })
        nestedArr.push(booleanObj)
      })
  
      const finalArr = []
      nestedArr.forEach(item => {
        let mergedObj = {
          ...item[0],
          ...item[1],
          ...item[2],
          ...item[3],
          ...item[4],
          ...item[5],
          ...item[6] 
        }
        finalArr.push(mergedObj)
      })
      return finalArr
    }
    setToBooleans(transformToBooleans())
  }, [correctAnswers])

  useEffect(() => {
    const groupAnswers = () => {
      let clonedAnsweres = [...toBooleans, ...userAnswers, ...checkIfCorrect]
      const groupById = clonedAnsweres.reduce((acc, obj) => {
        let key = obj['id']
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
      return groupById;
    }
    dispatchGrouped({
      type: "GET_GROUPED",
      payload: groupAnswers()
    })
  }, [toBooleans, userAnswers, checkIfCorrect])

  return (
    <div className="App">
        <Header />
      <div className='app-container'>
        <div className="container">
        {
          location.pathname === "/quiz/set_quiz" ?
            ''
            :
            limit < 5 ?
              <SubHeader />
              :
              ""
        }
        <Switch>
          <Route exact path='/quiz/quiz_start'>
            {limit < 5 ?
            ''
            :
            <Cards />
            }
          </Route>

          <Route exact path='/quiz/set_quiz'>
            <NumberOfQuestions />
          </Route>

          <Route path='/quiz/result'>
            {
              limit < 5 ?
                ""
                :
                <Result />
            }
          </Route>
        </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
