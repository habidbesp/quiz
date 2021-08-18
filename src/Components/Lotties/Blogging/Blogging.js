import React, { useEffect, createRef  } from 'react'
import lottie from 'lottie-web'
import animation from './Blogging.json'
import './Blogging.css'

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
      return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
        <>
        <div className="Blogging m-auto" 
        ref={animationContainer}/>
        </>
    )
}
