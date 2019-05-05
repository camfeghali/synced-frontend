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
    }
    console.log("SONG INFO IS: ", songInfo)
    this.props.selectSong(songInfo)
  }

  render() {
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
      <div key={song.id}>
        <img id={song.id} album={song.album} style={{position:'relative', width:'100%'}} onClick = {this.onSongClick} name={song.name}  previewurl={song.preview_url} src={song.image_url} alt={song.preview_url}/>
      </div>
    )})
    return (
      <Slider {...settings} style={{height:'200px'}}>
          {songs}
      </Slider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.media.songs
  }
}

export default connect(mapStateToProps,{selectSong})(SimpleSlider)
