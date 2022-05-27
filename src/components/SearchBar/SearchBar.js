import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }
  handleTermChange(event) {
    this.search(event.target.value);
  }
  search(term) {
    this.props.search(term);
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
