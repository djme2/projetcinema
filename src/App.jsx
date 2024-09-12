import {useState} from 'react';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import './App.css';
import searchIcon from './assets/searchIcon.svg';
import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Details from './components/Details';
import Recherche from './components/Recherche';
import Favoris from './components/Favoris';
import Poster from './components/Poster';
import {movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, } from './globals/global';



const App = () => {
  const [count, setCount] = useState(0)
  const movie1 = {
    poster:    "https://media.themoviedb.org/t/p/w220_and_h330_face/iRNbRAIGQQr5diGnjpwJFm0dgt4.jpg",
title:"Dune: Part Two ",
releaseDate:"28/02/2024 ",
runtime: 165,
rating: 83,
genres: " Science-Fiction, Aventure ",
budget: 19000000000 ,
revenue: 68381373400 ,
overview: "Le voyage mythique de Paul Atreides qui s'allie à Chani et aux Fremen dans sa quête de vengeance envers les conspirateurs qui ont anéanti sa famille. Devant choisir entre l'amour de sa vie et le destin de l'univers, il fera tout pour éviter un terrible futur que lui seul peut prédire.",
casting: [
  {
    name: "Timothée Chalamet",
    character: "Paul Atreides",
    image:
      "https://media.themoviedb.org/t/p/w138_and_h175_face/BE2sdjpgsa2rNTFa66f7upkaOP.jpg",
  },
  {
    name: "Zendaya",
    character: "Chani",
    image:
      "https://media.themoviedb.org/t/p/w138_and_h175_face/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg",
  },
  {
    name: "Rebecca Ferguson",
    character: "Jessica",
    image:
      "https://media.themoviedb.org/t/p/w138_and_h175_face/lJloTOheuQSirSLXNA3JHsrMNfH.jpg",
  },
],
};
const movie2 ={
  poster:"https://media.themoviedb.org/t/p/w220_and_h330_face/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
  
  title: "Kung Fu panda 4",
      releaseDate: "2024-03-02",
      runtime: 94,
      rating: 67,
      genres: "Animation, Action, Adventure",
      budget: 85000000,
      revenue: 347255055,
      overview:"Après trois aventures dans lesquelles le guerrier dragon Po a combattu les maîtres du mal les plus redoutables grâce à un courage et des compétences en arts martiaux inégalés, le destin va de nouveau frapper à sa porte pour l'inviter à enfin se reposer. Plus précisément, pour être nommé chef spirituel de la vallée de la Paix.",
      casting: [
        {
          name: "Jack Black",
          character: "Po (voice)",
          image:
            "https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg",
        },
        {
          name: "Awkwafina",
          character: "Zhen (voice)",
          image:
            "https://image.tmdb.org/t/p/w185/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg",
        },
        {
          name: "Bryan Cranston",
          character: "Li (voice)",
          image:
            "https://image.tmdb.org/t/p/w185/kNyTXGkiSP8W4Gs60hF7UoxZnWN.jpg",
        },
      ],
    };

return (

  //  <Accueil /> 
<Router> 
   <Accueil /> 
             <Routes> 
          <Route path='/' element={<Nav/>}/>
          <Route path='/accueil' element={<Accueil/>}/>
          <Route path='/details1' element={<Details data={movie1}/>}/>
          <Route path='/details2' element={<Details data={movie2}/>}/>
          
        </Routes>
   </Router>  





  )
};
export default App;
