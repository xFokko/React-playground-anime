// import './App.css'
import './assets/style.scss'
import React from "react"
import Cards from "./components/Cards"




const animeList=[
  {
      name:"Naruto",
      image: "https://i.pinimg.com/564x/b7/c0/97/b7c097e23d7446dcc187743a9a8725cb.jpg",
      flow: "Yellow",
      preview:"https://www.youtube.com/watch?v=RzClCJFpSoM",
      summary:" Naruto est un jeune ninja du village de Konoha. Hôte du démon renard à neuf queues, une créature qui a attaqué le village par le passé, il est rejeté par les autres villageois. Son ambition est de devenir Hokage, afin de gagner le respect des habitants."
  },
  {
      name:"Solo-leveling",
      image: "https://i.pinimg.com/564x/75/5d/28/755d2885ec9aa305b9400ca16dcad52a.jpg",
      flow: "Violet",
      preview:"https://www.youtube.com/watch?v=Pu9b65JqxEk",
      summary:"D’étranges portails sont apparus aux quatre coins du monde, laissant pénétrer d’abominables monstres. Pour résister à l’envahisseur, l’humanité a constitué une armée de chasseurs intrépides qui passent les portails pour attaquer l’ennemi. Jinwoo est le plus faible des chasseurs. Alors qu’il participe à un raid, il s’effondre et est laissé pour mort. Mais à son réveil à l’hôpital, il ne se sent plus le même et découvre, grâce à une interface virtuelle, qu’il devient progressivement de plus en plus fort..."
  },
  {
      name:"Kimetsu-no-yaiba",
      image: "https://i.pinimg.com/564x/39/c9/71/39c971f959c53a310a5d54830a972d25.jpg",
      flow: "Blue",
      preview:"https://www.youtube.com/watch?v=tYIqLBiUsvQ",
      summary:"Ce manga nous raconte l'histoire de Kamado Tanjiro et de sa sœur Nezuko. Un jour alors que Tanjiro part vendre du charbon à un village voisin, sa famille se fait massacrer par un démon, et la seule survivante est Nezuko qui est alors transformée en démon mangeur d'homme. Il deviendra alors un chasseur de demon afin de trouver un antidote pour que sa soeur redevienne humaine."
  },
  {
      name:"Hunter x Hunter",
      image: "https://i.pinimg.com/736x/7c/1b/c0/7c1bc0c521a9438d78da4ddabe634c14.jpg",
      flow: "Pink",
      preview:"https://www.youtube.com/watch?v=bZSVt2YuxfU",
      summary:"Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter."
      },
  {
      name:"Bleach",
      image: "https://i.pinimg.com/564x/36/fc/92/36fc925427a1fc9299c0a66b24065af5.jpg",
      flow: "White",
      preview:"https://www.youtube.com/watch?v=hc8hW26vuI4",
      summary:"Ichigo Kurosaki devient un peu malgré lui un Shinigami, c'est-à-dire un « dieu de la mort », dont la fonction consiste à protéger les humains des Hollows, des monstres nés des âmes humaines qui n'ont pas pu trouver le repos"
      }
  ]
  
function App() {


  return (
    <div>
      <h1>Discover an universe</h1>


        <div className='main__container'>
          {animeList.map((el)=>
          <Cards 
           key={el.name}
           name={el.name}
           image={el.image}
           aura={el.flow}
           preview={el.preview}
           summary={el.summary}/>
            )}
         </div>

    </div>
  )
  
  
}

export default App;
