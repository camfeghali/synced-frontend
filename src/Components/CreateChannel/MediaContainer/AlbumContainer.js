import React from 'react'
import Coverflow from 'react-coverflow';
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class AlbumContainer extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Coverflow width="960" height="200"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}>
          <div
            role="menuitem"
            tabIndex="0">
          <img
            src='image/path'
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
              }}/>
          </div>
          <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
          <img src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        </Coverflow>
      </React.Fragment>
    )
  }
}

export default AlbumContainer
