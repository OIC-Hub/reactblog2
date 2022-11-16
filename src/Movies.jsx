import axios from 'axios';
import { useState, useEffect} from 'react';

function Movies() {
const[data, setData] = useState('');

useEffect(()=>{
    getMovies()

}, [])

    
const getMovies = async ()=>{
    try{
          const searchMovies = await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman');
       setData(searchMovies.data.Search);
       

}catch(err){
    console.log(err)
}
}


  return (
    <>
    {data?
    
    data.map((value, index)=>{
    return(
     <h2 key={index}>{value.Title}</h2>
     )
    }):
    <h2>Loading...</h2>
     
     }
    <p>Movies</p>
    
    </>
  )
}

export default Movies