import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    const { tracks, onRemoval, isRemoval, onAdd } = this.props;
    return (
      <div className="TrackList">
        {
          tracks.map(track => {
            return <Track
              onRemoval={onRemoval}
              isRemoval={isRemoval}
              onAdd={onAdd}
              track={track}
              key={track.id}
            />;

          })
        }
      </div>
    );
  }
}

