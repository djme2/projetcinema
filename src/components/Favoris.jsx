import React from 'react'


import Poster from './Poster';
import Nav from './Nav';
const Favoris =()=> {

  const [favorites, setFavorite] = useState("");

  useEffect(async ()=>{
    let savedFavorite = await localStorage.getItem('__Fav');
    if(savedFavorite) {
      setFavorite(savedFavorite);
    }
  }, [])

  return (
    <div>
      fav
    </div>
  )
}

export default Favoris;