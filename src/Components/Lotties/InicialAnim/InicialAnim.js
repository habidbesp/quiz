import React, { useEffect, createRef  } from 'react'
import lottie from 'lottie-web'
import animation from './login.json'
import './InitialAnim.css'

export default function InicialAnim() {

    const animationContainer = createRef()

    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation
      });
      return () => anim.destroy(); 
    }, []);

    return (
        <>
        <div className="InicialAnim" 
        ref={animationContainer}/>
        </>
    )
}
