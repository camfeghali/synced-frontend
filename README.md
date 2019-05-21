### Synced
Synced is a fullstack web application built with Ruby on Rails and ReactJS. The purpose of this app is to synchronize music so users can listen to songs at the same time regardless of their location. It is my final project as part of Flatiron School's Software Engineering Bootcamp.

### Motivation
I built because I always imagined a world where people can experience music together and not be bound by spatial constraints. With Synced, people in the same room working, having lunch, or doing any other activity can listen together, but furthermore, people across the world can listen to albums together, or a person can throw a multi-location parrty from one spot.

### Demo 
Link to demo: https://youtube....... remains to be hosted

### Tech / Frameworks

#### Built with
- Ruby on Rails
- ReactJS
- Redux
- Websockets with Rails' ActionCable
- srpotify: https://github.com/guilhermesad/rspotify
- PostgreSQL
- OAuth using Bcrypt & JWT
- Semantic UI
- ParticlesJS: https://github.com/Wufe/react-particles-js

### Features

- Users can look up songs seeded in the database, select and play it. 
- Users can create / delete playlists.
- Users can add / remove songs from a playlist.
- Users can see which stations are available.
- Users can see who is online.
- Users can broadcast a station.
- Users can join a station and be synced to it.
- There is no limit on how many people can join a station, but more than four users slows down your machine!

### Installation
1 - Clone this repository and the backend found here: https://github.com/camfeghali/synced-backend
2 - In backend directory: 
  a - Run `rails db:migrate`
  b - Run `rails db:seed`
  c - Run `rails s`
3 - In Frontend directory:
  a - Run `npm install`
  b - Run `npm start`
  
### How to use?
1 - Open two browsers, the second in incognito mode.
2 - Signup up into a different account in each browser.
3 - In browser A, navigate to the "lobby" using the navbar up-top.
4 - In browser B, navigate to "my station" using the navbar.
5 - in Browser B, select a song, play it, and hit the "Broadcast button"
6 - In browser A, join into the station, and see how from browser B, you can control browser A's music.
7 - Share music with friends!

### Credit
I would like to thank my instructional team especially @alexgriff, https://github.com/alexgriff, for their support.
Also the makers of: 
- ParticleJS: https://github.com/Wufe/react-particles-js
- rspotify: https://github.com/guilhermesad

### License

Not really sure, everyone can use it!
  
