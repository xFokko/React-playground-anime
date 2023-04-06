// import './App.css'
import './assets/style.scss'
import React from "react"
import Cards from "./components/Cards"



const animeList=[
  {
      name:"naruto",
      image: "https://i.pinimg.com/564x/b7/c0/97/b7c097e23d7446dcc187743a9a8725cb.jpg",
      flow: "Yellow"
  },
  {
      name:"solo-leveling",
      image: "https://i.pinimg.com/564x/75/5d/28/755d2885ec9aa305b9400ca16dcad52a.jpg",
      flow: "Violet"
  },
  {
      name:"kimetsu-no-yaiba",
      image: "https://i.pinimg.com/564x/39/c9/71/39c971f959c53a310a5d54830a972d25.jpg",
      flow: "Blue"
  },
  {
      name:"hunterxhunter",
      image: "https://i.pinimg.com/736x/7c/1b/c0/7c1bc0c521a9438d78da4ddabe634c14.jpg",
      flow: "Pink"
      },
  {
      name:"Bleach",
      image: "https://i.pinimg.com/564x/36/fc/92/36fc925427a1fc9299c0a66b24065af5.jpg",
      flow: "White"
      }
  ]
  
function App() {


  return (
    <div>
      <h1>Descover an universe</h1>
        <div className='main__container'>
          {animeList.map((el)=>
          <Cards 
           key={el.name}
           name={el.name}
           image={el.image}
           aura={el.flow}/>
          )}
      
     
      </div>

    </div>
  )
  
  
}

export default App;
