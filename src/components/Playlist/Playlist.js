import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    const { handleNameChange } = this;
    const { playlistName, onRemoval, playlistTracks, onSave } = this.props;
    return (
      <div className="Playlist">
        <input
          onChange={handleNameChange}
          defaultValue={playlistName}
        />
        <TrackList
          onRemoval={onRemoval}
          isRemoval={true}
          tracks={playlistTracks}
          key={1}
        />
        <button
          className="Playlist-save"
          onClick={onSave}
        >
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}