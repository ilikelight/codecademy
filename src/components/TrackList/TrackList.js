import React from 'react';

import { BaseComponent } from '../BaseComponent/BaseComponent';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends BaseComponent {
  tracks = [];
  checkTracks() {
    if(this.props.tracks) {this.tracks = this.props.tracks};
  }

  render() {
    this.checkTracks();
    return (
        <div className="TrackList">
          {this.tracks.map(track => <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} />)}
        </div>
    );
  }
}

export default TrackList;
