import { useState } from "react"

 function Cards({name, image, aura}){

    

    

// state & algo /--------------------------------------------------

const handleSwitch=()=>{
{className=""}
}



// return /------------------------------------------------------------
    return(
         <div className="scene">
        <div className="card__container">
           {/* carte 1---------------- */}
            <div className={`anime__front${aura} card__face`}>
            {/* // Onclick={handleSwitch}> */}
                <img className="anime__img" 
                src={image} 
                alt={name}/>
            </div>
            {/* carte 2---------------- */}
            <div className="card__face card__back">
                <p>{name}</p>
            </div>

        </div>
        </div>
    )
 }

 export default Cards