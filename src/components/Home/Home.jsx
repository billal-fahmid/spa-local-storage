import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = (props) => {
    const [movies , setMovies] = useState([])
    

    // console.log(movies)
    useEffect(() =>{
       
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    },[])


    return (
        <div>
          
            <div className="movie-container row">
                {
                    movies.map(movie => (
                        <SingleCard movie ={movie} handleWatchTime ={props.handleWatchTime}></SingleCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;