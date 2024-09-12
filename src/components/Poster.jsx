import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const Poster = (params) => {
  return <Link to={params.dest}><img src={params.src} alt="" height={700} className="rounded-3" /></Link>
};

export default Poster;
