import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import Grade from '@mui/icons-material/Grade';
import './Book/style.css'
import Navbar from './navbar';
export const Search = () => {
    // const [searchTerm, setSearchTerm] = useState('');
       const [results, setResults] = useState([]);
       const location = useLocation();
       const query = new URLSearchParams(location.search).get("query");

//     console.log(searchTerm)
    useEffect(() => {
        const fetchData = async () => {
          // if(searchTerm){
            console.log({query});
          const res = await axios.get(`http://localhost:5000/search?q=${query}`);
          setResults(res.data);}
        // };
    
        fetchData();
    },[query]);
      // }, [searchTerm]);
//       const handleSearch = (e) => {
        
//         e.preventDefault();
        
//         setSearchTerm(e.target.value);
//       };
  return (
      <div >
      
        <ul className='books'>
         {results.books && results.books.map((result)=>(
              <div className="card" key={result._id}>
                  <img src={result.image} alt={result.name} height="300px" width="250px"/>
                  <article>By {result.author}</article>
                  <h2>{result.name}</h2>
                  <div className="Rating">
                    <h3>Rs {result.price}</h3>
                    <h3 className='Grade'><Grade/>{result.rating}</h3>
                  </div>
                </div>
            )) } 
          </ul>
      </div>
  )
}


