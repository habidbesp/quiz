import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'
import bananaBoy from './banana-boy.json'
import cat from './cat.json'
import chemical from './Chemical.json'
import cow from './cow.json'
import iceCream from './ice cream.json'
import laptop from './laptop.json'
import oops from './oops-animation.json'
import sign from './sign-for-error-flat-style.json'
import wrongMonkey from './wrong-notif.json'
import tissue from './tissue.json'

export default function WrongRandomAnim(props) {

    const { width, height } = props

    const animationContainer = createRef()

    const animArr = [bananaBoy, cat, chemical, cow, iceCream, laptop, oops, sign, wrongMonkey, tissue]

    const randomAnim = () => animArr[Math.floor(Math.random() * animArr.length)];

    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: randomAnim()
      });
      return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
      <>
      <div  
      style={
          { 
            width: `${width}px`,
            height: `${height}px`
        }
          }
      ref={animationContainer}/>
      </>
    )
}

