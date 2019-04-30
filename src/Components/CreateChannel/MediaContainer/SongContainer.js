import React from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick";
import { selectSong } from '../../../Actions/mediaActions'


class SimpleSlider extends React.Component {

  onSongClick = (e) =>{
    let songInfo = {
      previewUrl: e.target.alt,
      songId: parseInt(e.target.songid)
    }
    this.props.selectSong(songInfo)
  }

  render() {
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
        <img id={song.id} style={{position:'relative', width:'100%'}} onClick = {this.onSongClick} previewurl={song.preview_url} src={song.image_url} alt={song.preview_url}/>
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
