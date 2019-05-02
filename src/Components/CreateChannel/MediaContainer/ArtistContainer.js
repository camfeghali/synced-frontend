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
    // let artists = this.props.artists.map(artist => {return (
    //   <div key={artist.id}>
    //     <img id={artist.id} style={{position:'relative', width:'100%'}} onClick = {this.onSongClick} src={artist.image_url}/>
    //   </div>
    // )})
    return (
      <Slider {...settings} style={{height:'200px'}}>

      </Slider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.media.artists
  }
}

export default connect(mapStateToProps,{selectSong})(SimpleSlider)
