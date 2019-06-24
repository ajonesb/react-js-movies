import React from 'react'

class MovieRow extends React.Component {

    viewMovie() {
        console.log ('Trying to view movie');
        console.log (this.props.movie.title);
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {

    return (

        <div className="MovieWrap col-sm-12 col-md-6 col-lg-6" key={this.props.movie.id}>
            <div className="ImageWrap">
                <img alt="poster" width="200" height="300" src={this.props.movie.poster_src} />
            </div>        
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <div className="releaseDate">RELEASE DATE: {this.props.movie.release_date}</div>
            <div className="voteAverage">{this.props.movie.vote_average}</div>
            <div className="ButtonWrap">
                <input className="btn btn-primary" type="submit" onClick={this.viewMovie.bind(this)} value="View Movie Info" />         
            </div>                        
        </div>

        )
    }
}

export default MovieRow