import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export const Favorite=()=>{

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query');
   
    return (<div>
     <div>
      <h1>Search results for: {searchQuery}</h1>
    </div>
    </div>)
}