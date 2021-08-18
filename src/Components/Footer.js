import React, {useContext} from 'react'
import ResetQuiz from './ResetQuiz'
import { QuizContext } from '../context/QuizContex'
import lottieLogo from '../logos/lottiefiles-logo.svg'
import reactLogo from '../logos/react-logo.png'
import sassLogo from '../logos/sass-logo.svg'
import pixeltrueLogo from '../logos/pixeltrue-packs.svg'
import bootstrapIcon from '../logos/bootstrap-icon.png'
import quizApiLogo from '../logos/quizApi-dark.png'
import reactBootstrapIcon from '../logos/react-bootstrap.svg'
import facebookLogo from '../logos/facebook-logo.png'
import githubLogo from '../logos/github-logo.png'
import linkedin from '../logos/linkedin-logo.png'

export default function Footer() {
    const { limit } = useContext(QuizContext)
    return (
        <>
            <nav className="navbar-light bg-light text-start">
                
                <div className="text-end">
                {
                    limit < 5 ?
                        ""
                        :
                        <ResetQuiz />
                }   
                </div>
            
                <div className="container-fluid pb-5">
                      <div className="row">
                        <div className="col mt-3">
                            <h6 className="fw-bolder">Source API:</h6>
                          <a className="navbar-brand" href="https://quizapi.io/">
                              <img src={quizApiLogo} alt="quiz-logo" width="250" />
                          </a>
                        </div>
                      
                        <div className="col m-auto mt-3 border-start">
                            <h6 className="fw-bolder">Frameworks and libraries:</h6>
                            <ul className="d-flex flex-wrap mt-5">
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://reactjs.org/">
                                        <img src={reactLogo} alt="react-logo" width="50" />
                                    </a>
                                </li>
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://sass-lang.com/">
                                        <img src={sassLogo} alt="sass-logo" width="50" />
                                    </a>
                                </li>
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://getbootstrap.com/">
                                        <img src={bootstrapIcon} alt="bootstrap-logo" width="50" />
                                    </a>
                                </li>
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://react-bootstrap.netlify.app/">
                                        <img src={reactBootstrapIcon} alt="reactBootstrap-logo" width="50" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                      
                        <div className="col m-auto mt-3 border-start">
                            <h6 className="fw-bolder">Animations:</h6>
                            <ul className="d-flex flex-wrap mt-5">
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://lottiefiles.com/">
                                        <img src={lottieLogo} alt="lottie-logo" width="90" />
                                    </a>
                                </li>
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://www.pixeltrue.com/">
                                        <img src={pixeltrueLogo} alt="pixeltrue-logo" width="40" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col m-auto mt-3 border-start">
                            <h6 className="fw-bolder">Contact:</h6>
                            <ul className="d-flex flex-wrap mt-5">
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://github.com/habidbesp">
                                        <img src={githubLogo} alt="github-logo" width="30" />
                                    </a>
                                </li>
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://www.linkedin.com/in/habidbadillo/">
                                        <img src={linkedin} alt="linkedin-logo" width="30" />
                                    </a>
                                </li>
                                <li className="ms-2 mb-3">
                                    <a className="navbar-brand" href="https://www.facebook.com/habid.bespinosa/">
                                        <img src={facebookLogo} alt="facebook-logo" width="30" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                      </div>
                     
                  
                  
                </div>
            </nav>
        </>
    )
}
