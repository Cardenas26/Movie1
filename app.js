import {useState,useEffect} from 'react';
import './app.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';


const API_URL= 'http://omdbapi.com?apikey=a8b8d7bb'




const App=()=> {
const [searchTerm, setSearchTerm]=useState("");
 const [movies, setMovies] = useState([]);
 useEffect(()=>{
    searchMovies("Batman")
    },[]);
const searchMovies= async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
    setMovies(data.Search);
};




    return(
       <div className="app">
        <h1>Cesars Movies  </h1>
        <div className="search">
            <input placeholder="Search for Movies"
            value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.vale)}
            />
            <img src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}/>
        </div>

{ movies?.length > 0 ? (
    <div className="container">
    {movies.map((movie)=>(
        <MovieCard movie={movie}/>
    
        
    ))}
    </div>
):(
    <div className="empty">
    <h2>No movies found</h2>
    </div>
)}

</div>
    );
};

export default App;