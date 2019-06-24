import React from 'react'
import MovieRow from '../MovieRow/MovieRow'

class Search extends React.Component {

   constructor(props) {
        super(props);
        this.state = {};
        this.searchMovies('Avengers');
    }

    searchMovies(searchTerm) {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=135b8079aabc20736ca48a2aa459546d&query=' + searchTerm)
        .then(res => res.json())
        .then((searchResults) => {
          console.log(searchResults);

          const results = searchResults.results;
          var movieRows = [];

          results.forEach((movie) => {
            console.log(movie)
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieRow key={movie.id} movie={movie} />
            movieRows.push(movieRow)
          })
    
          this.setState({rows: movieRows})
        })
        .catch(console.log)
    }
    
    
    searchChangeHandler(event) {
        console.log(event.target.value)

        const boundObject = this;
        const searchTerm = event.target.value;

        boundObject.searchMovies(searchTerm)
    }

    render () {
        return (
        <div className="input-group">  
            <input onChange={this.searchChangeHandler.bind(this)} type="text" className="form-control FullWidth" placeholder="Search Movie Here" aria-label="Text input with checkbox" />
            {this.state.rows}        
        </div> 
        );
    }
}

export default Search