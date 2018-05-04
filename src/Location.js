import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="location__container">
        <div className="location__city">{this.props.city}</div>
        <div className="location__country">{this.props.country}</div>
        <div className="location__lnglat">
          LAT: {this.props.lat} / LNG: {this.props.lng}
        </div>
      </div>
    );
  }
}

export default SearchBar;
