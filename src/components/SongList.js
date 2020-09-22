import React, { Component } from 'react'
import { connect } from 'react-redux';

class SongList extends Component{
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          {song.title}
          <button className="btn btn-primary">Select</button>
        </div>
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        SongList
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {songs: state.songs}
};

export default connect(mapStateToProps) (SongList);
