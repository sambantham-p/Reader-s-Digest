import React, { useEffect } from "react";
import  {useState}  from "react";
import axios from "axios";
import Book from "./Book";
import "./style.css"
import Navbar from "../navbar";
const URL = "http://localhost:5000/books";

const fetchHandler = async() =>{
   return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
    const[books,setBook]= useState()
    useEffect(()=>{
        fetchHandler().then(data => setBook(data.books));
    },[]);
    console.log(books)
    return(
        <>
        
        <div className="book">
            <ul className="books">
                 {books && books.map((book,index) => (
                    <div className="li" key={index}>
                        <Book book={book}/>
                    </div>
                 ))}
            </ul>
        </div>
        </>
    )
}

export default Books;