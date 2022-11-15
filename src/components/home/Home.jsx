import React from "react";
import { addMovieFavorite, getMovies } from "../../actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Paginado from "../paginado/Paginado"

const Home = ()=>{

    const dispatch = useDispatch();
    const allMovies = useSelector((state) => state.moviesLoaded);
    console.log(allMovies)
    const allMoviesFavourites = useSelector((state) => state.moviesFavourites);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviePerPage /*setMoviePerPage*/] = useState(8); 
    const indexOfLastMovie = currentPage * moviePerPage; 
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
    const currentMovie = allMovies?.slice(indexOfFirstMovie, indexOfLastMovie);
    const [, /*[order*/ setOrder] = useState("");
  
    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getMovies());
        dispatch(addMovieFavorite());
        // dispatch(getBreeds());
      }, [dispatch]);


return(
    <div>
        <Paginado
        moviePerPage={moviePerPage}
        allMovies={allMovies.length}
        paginado={paginado}
        />
        {/* <button
                    className="Fav" 
                    onClick={() =>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, img: movie.Poster})}>
                    FAV
                  </button> */}
    </div>
)


}

export default Home