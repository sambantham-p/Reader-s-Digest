import React, { useState} from "react";
import { useNavigate } from "react-router-dom";


export const SearchInput = () =>
{
  const [search, setSearch] = useState("");
  const history = useNavigate();
  return (
    <div>
     
      <div>
      <input style={{borderRadius:"10px", height:"20px",paddingLeft:"5px"}}
                    type="text"
                    placeholder="Search "
                    onChange={(e)=>{
                        setSearch(e.target.value);
                        history(`/search?query=${search}`);
                    }}  />
     
      

      </div>
    </div>
  )
}