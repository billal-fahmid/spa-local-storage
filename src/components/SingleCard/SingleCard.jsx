import React from 'react';

const SingleCard = (props) => {
    // console.log(props.movie)
    const {movieName,description,imdbRating,watchTime,poster} = props.movie
    return (
        <div>
            <div className="movie-card card text-center w-100 m-auto col-md-6">
                    <div className="movie-poster w-25 m-auto">
                        <img className='w-75 ' src={poster} alt="" />
                    </div>
                    <h3>{movieName}</h3>
                    <p>{description}</p>
                    <div className="lenght-ratting d-flex justify-content-around">
                        <p>Watch Time : {watchTime}</p>
                        <p>Rating : {imdbRating}</p>
                    </div>
                    <button onClick={()=>props.handleWatchTime(watchTime)} className='btn btn-danger w-50 m-auto'>Book Now</button>
                </div>
        </div>
    );
};

export default SingleCard;