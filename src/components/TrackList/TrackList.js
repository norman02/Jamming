import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => (
          <Track id={track.id} track={track} onAdd={this.props.onAdd} />
        ))}
      </div>
    );
  }
}

export default TrackList;
