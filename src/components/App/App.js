import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'my playlist',
      playlistTracks: [
        { name: "name 1", artist: "artist 1", album: "album 1" },
        { name: "name 2", artist: "artist 2", album: "album 2" },
        { name: "name 3", artist: "artist 3", album: "album 3" },
      ],
      searchResults: [
        { name: "name 1", artist: "artist 1", album: "album 1" },
        { name: "name 2", artist: "artist 2", album: "album 2" },
        { name: "name 3", artist: "artist 3", album: "album 3" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
