
import React, { useState, useEffect } from 'react'
// import { getMovies } from '../MovieService'
import Pagination from './Pagination'


function MoviesPage() {
    const [movies, setMovies] = useState([]);
    let [filteredMovies, setFilteredMovies] = useState([]);
    const [genres, setGenre] = useState([{ id: 1, name: "All Genres" }]);

    let [limit, setLimit] = useState(4);
    let [currentPage, setCurrentPage] = useState(1);
    

    // changing the curent page for panigantion
    function changeCurrentPage(pageNumber) {
        setCurrentPage(pageNumber);
    }


    // delete a single movie
    function deleteMoive(movieId) {
        let newMovieArr = movies.filter(movie => {
            return movie._id !== movieId;
        })
        setMovies(newMovieArr);
        setFilteredMovies(newMovieArr);
    }


    // searching movies
    function searchedMovies(searchText) {

        let filteredArr = movies.filter(movie => {
            let title = movie.title.toLowerCase();
            return title.includes(searchText);
        })
        if (searchText === "") {
            setFilteredMovies(movies);
        }
        setFilteredMovies(filteredArr);
    }


    // sorting movies not working
    function sortMovies(e) {
        let className = e.target.className;
        let sortedMovies;
        if (className === "fas fa-sort-up rate") {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
            });
        } else if (className === "fas fa-sort-down rate") {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
            });
        } else if (className === "fas fa-sort-up stock") {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjA.numberInStock - movieObjB.numberInStock;
            });
        } else if (className === "fas fa-sort-down stock") {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjB.numberInStock - movieObjA.numberInStock;
            });
        }
        setFilteredMovies([...sortedMovies]);
        setMovies([...sortedMovies]);
    }


    // changing the curent page for panigantion
    function changelimit(e) {
        let currLimit = e.target.value;
        if (currLimit < 1) return;
        setLimit(currLimit);
    }


    // sort Genre
    function sortGenre(nGenre) {
        if (nGenre === "All Genres") {
            setFilteredMovies(movies);
            return;
        }
        let filtereMovies = movies.filter(movie => {
            return movie.genre.name === nGenre;
        })
        setFilteredMovies([...filtereMovies]);
    }


    useEffect(async () => {

        // getting Movies from moviesService.js
        (async () => {
            let resp = await fetch("https://react-backend101.herokuapp.com/movies");
            let jsonMovies = await resp.json();
            setMovies(jsonMovies.movies);
            setFilteredMovies(jsonMovies.movies);

            resp = await fetch("https://react-backend101.herokuapp.com/genres");
            let jsonGenres = await resp.json();
            setGenre([...genres, ...jsonGenres.genres]);
        })();

    }, [])


    // to set the filteredMovies to with the accurate elemt of page number
    let numberOfPages = Math.ceil(filteredMovies.length / limit);
    let startIndex = (currentPage - 1) * limit;
    let endIndex = startIndex + limit;
    filteredMovies = filteredMovies.slice(startIndex, endIndex);


    return (
        <div className="row">
            <div className="col-2">
                <ul className="list-group">
                    {
                        genres.map(genre => {
                            return (
                                <li
                                    key={genre._id}
                                    className="list-group-item"
                                    onClick={() => sortGenre(genre.name)}
                                > {genre.name} </li>)
                        })
                    }
                </ul>
            </div>

            <div className="col-10">
                {/* search */}
                <input
                    type="text"
                    placeholder="Enter Movie Name"
                    onChange={(e) => searchedMovies(e.target.value)}
                />
                <input type="number" className="col-1"
                    placeholder="no of elements/page"
                    value={limit}
                    onChange={(e) => changelimit(e)}
                />
                {/* table */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">
                                <i className="fas fa-sort-up stock" onClick={(e) => sortMovies(e)} ></i>
                                Stock
                                <i className="fas fa-sort-down stock" onClick={(e) => sortMovies(e)} ></i>
                            </th>
                            <th scope="col">
                                <i className="fas fa-sort-up rate" onClick={(e) => sortMovies(e)} ></i>
                                Rate
                                <i className="fas fa-sort-down rate" onClick={(e) => sortMovies(e)} ></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredMovies.map(movie => (
                            <tr key={movie._id}>
                                <td></td>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button
                                        className="btn btn-danger text-white"
                                        onClick={() => { deleteMoive(movie._id) }}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                {/* pagination */}
                <Pagination
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                />
            </div>

        </div>
    )
}


export default MoviesPage
