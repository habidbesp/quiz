import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'
import winngs from './winngs.json'
import coin from './coin.json'
import yeliFish from './power-sticker.json'
import rocket from './rocket.json'
import star from './star-seo-ranking.json'
import allTheBest from './all-the-best.json'
import feedback3 from './feedback3.json'
import checkMark from './check-mark-yes.json'
import colider from './colider.json'
import success from './success.json'
import monkey from './notif-correct.json'

export default function CorrectRandomAnim(props) {

  const { width, height } = props

  const animationContainer = createRef()

  const animArr = [success, colider, checkMark, winngs, coin, yeliFish, rocket, star, allTheBest, feedback3, monkey]

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
