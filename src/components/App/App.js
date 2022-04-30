import React from 'react';
import './App.css';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    // https://stackoverflow.com/a/30649491 :(
  };
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(existingTrack => existingTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  };
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.splice(tracks.map(existingTrack => existingTrack.id).indexOf(track.id), 1);
    // splice (start, deleteCount), map for comparing object properties with array methods
    // I am shocked that this was correct on my first try
    this.setState({
      playlistTracks: tracks
    });
  };
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  };
  savePlaylist() {
    // This is 100% wrong
    // method that 'generates an array of uri values called trackURIs from playlistTracks
    // ...it was correct
    const trackURIs = this.state.playlistTracks.map(object => object.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs
    ).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: [],
      });
    });
  };
  // asdfasdfasdfasdfasdfasdf
  search(term) {
    console.log('searched');
    Spotify.search(term)
      .then(searchResults => {
        this.setState({
          searchResults: searchResults
        });
      });
  };
  render() {
    const { addTrack, removeTrack, updatePlaylistName, savePlaylist, search } = this;
    const { searchResults, playlistTracks, playlistName } = this.state;
    return (
      <div>
        <h1>Ja<span className="highlight">mm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={search}
          />
          <div className="App-playlist">
            <SearchResults
              onAdd={addTrack}
              searchResults={searchResults}
            />
            <Playlist
              onRemoval={removeTrack}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              playlistName={playlistName}
              onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}