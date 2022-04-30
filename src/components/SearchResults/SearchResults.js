import React from 'react';
import './SearchResults.css';
import { TrackList } from '../TrackList/TrackList';

export class SearchResults extends React.Component {
  render() {
    const { onAdd, searchResults } = this.props;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          onAdd={onAdd}
          isRemoval={false}
          tracks={searchResults}
        />
      </div>
    );
  }
}