import { useState } from "react"
import "../assets/style.scss"
import Tilt from 'react-parallax-tilt'




 function Cards({name, image, aura}){

    

// state & algo /--------------------------------------------------

  

    const [isActive, setIsActive] = useState(false);
    const handleSwitch=()=>{
        setIsActive(current => !current);
 }



// return /------------------------------------------------------------
    return (
        <div>
             <Tilt
         glareEnable={true} 
         glareMaxOpacity={0.8} 
         glareColor="#ffffff" >
          <div className="scene"data-tilt>
           <div className={`card__container ${isActive ? 'card__flip' : ''}`}>
             {/* carte 1---------------- */}
             <div className={`anime__front${aura} card__face`}
             onClick={handleSwitch}
             >
                <img className="anime__img" 
                src={image} 
                alt={name}/>
             </div>
             {/* carte 2---------------- */}
             <div className="card__face card__back" onClick={handleSwitch}>
                <p>{name}</p>
             </div>
           </div>
          </div>
          </Tilt>
        </div>
    )
 }

 export default Cards