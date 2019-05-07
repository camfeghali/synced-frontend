import React from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick";
import { selectSong } from '../../../Actions/mediaActions'


class SimpleSlider extends React.Component {

  onSongClick = (e) =>{
    let songInfo = {
      trackName: e.target.name,
      album:  e.target.getAttribute('album'),
      previewUrl: e.target.alt,
      songId: parseInt(e.target.id),
      artist: e.target.getAttribute('artist')
    }
    console.log("SONG INFO IS: ", songInfo)
    this.props.selectSong(songInfo)
  }

  songRandomizer = (songs) => {
    let currentIndex = songs.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = songs[currentIndex];
      songs[currentIndex] = songs[randomIndex];
      songs[randomIndex] = temporaryValue;
    }
    return songs;
  }

  render() {
    console.log("What song data is available? :", this.props.songs)
    console.log("My songs info is: ", this.props.songs)
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      centerMode: true,
      arrows:false
    };
    let songs = this.props.songs.map(song => {return (
      <div key={song.id} className="box">
        <img className="song" id={song.id} artist={song.artist} album={song.album}  onClick = {this.onSongClick} name={song.name}  previewurl={song.preview_url} src={song.image_url} alt={song.preview_url}/>
        <div className="artist">
          <h2 className="white-text song-text">{song.artist}</h2>
        </div>
        <div className="song-name">
          <h4 className="white-text song-text">Track: {song.name}</h4>
        </div>
        <div className="album">
          <h4 className="white-text song-text">Album: {song.album}</h4>
        </div>
      </div>
    )})
    return (
      <div className="media-results">
        <Slider {...settings} style={{height:'200px'}}>
            {this.songRandomizer(songs.slice(0,(songs.length/2)))}
        </Slider>
        <Slider {...settings} style={{height:'200px'}}>
            {this.songRandomizer(songs.slice((songs.length/2), (songs.length)))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.media.songs
  }
}

export default connect(mapStateToProps,{selectSong})(SimpleSlider)
