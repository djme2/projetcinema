import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Poster from './Poster';
import Nav from './Nav';
// import { } from './globals/global';


const Details = ({ data }) => {

return(

    <div>
      <h1 className="text-green">{data.title}</h1>
      <p>{data.overview}</p>
      <p>
        <b className="text-green">Release date:</b> {data.releaseDate}
      </p>
      <p>
        <b className="text-green">Runtime:</b> {data.runtime}
      </p>
      <p>
        <b className="text-green">Rating:</b> {data.rating}%
      </p>
      <p>
        <b className="text-green">Genres:</b> {data.genres}
      </p>
      <p>
        <b className="text-green">Budget:</b> ${data.budget}
      </p>
      <p>
        <b className="text-green">Revenue:</b> ${data.revenue}
      </p>

     <h1>A propos</h1>
     

 </div>
  );
};


export default Details;