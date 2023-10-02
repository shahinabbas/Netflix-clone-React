import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Row(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((Response) => {
      setMovies(Response.data.results)
    })
  }, [])
  const opts = {
    height: '400',
    width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters    
      autoplay: 1,
    },
  };
  const handelMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response => {
      if (Response.data.results.length !== 0) {
        setUrlId(Response.data.results[0])
      }

    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((item) =>
          <img onClick={() => handelMovie(item.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={imageUrl + item.backdrop_path} alt="poster" />
        )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} className='youtube_player'/>}
    </div>
  )
}
export default Row
