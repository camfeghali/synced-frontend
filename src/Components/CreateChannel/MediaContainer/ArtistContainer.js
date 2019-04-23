import React from 'react'
import { } from 'semantic-ui-react'
import Gallery from 'react-photo-gallery'

class ArtistContainer extends React.Component{
  render(){
    const photos = [
      {
        src: 'http://example.com/example/img1.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        width: 0.2,
        height: 0.2
      },
      {
        src: 'http://example.com/example/img2.jpg',
        srcSet: ['http://example.com/example/img2.jpg 1024'],
        sizes:["(max-width: 30px) 50vw,(max-width: 1024px) 33.3vw,100vw"],
        width: 0.2,
        height: 0.2
      }
    ];
    return(
      <div style={{maxHeight: '200px'}}>
        <Gallery direction={'row'} photos={photos}/>
      </div>
    )
  }
}

export default ArtistContainer
