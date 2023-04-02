import React from 'react'
import Grade from '@mui/icons-material/Grade';
import "./style.css"
const Book = (props) => {
  const {author,description,image,name,price,rating,__v,_id} = props.book;
  return (
    <div className="card">
      <img src={image} alt={name} height="300px" width="250px"/>
      <article>By {author}</article>
      <h2>{name}</h2>
      <div className="Rating">
        <h3>Rs {price}</h3>
        <h3 className='Grade'><Grade/>{rating}</h3>
      </div>
    </div>
  )
}

export default Book;

