import { useState } from "react"

 function Cards({name, image, aura}){

    

    

// state & algo /--------------------------------------------------





// return /------------------------------------------------------------
    return(
        <div className="card__container">
            <figure className={`anime__flow${aura}`}>
                <img className="anime__img" 
                src={image} 
                alt={name}/>
            </figure>
        </div>
    )
 }

 export default Cards