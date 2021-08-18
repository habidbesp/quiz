import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'
import enter from './enter-the-correct-answer.json'

export default function EnterCorrAnsw(props) {

    const { width, height } = props

    const animationContainer = createRef()

    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: enter
      });
      return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
      <>
      <div 
        style={
          { 
            width: `${width}px`,
            height: `${height}px`,
            margin: "auto"
        }
          } 
        ref={animationContainer}/>
      </>
    )
}

