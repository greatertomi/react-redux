import React from 'react';
import './App.css';
import {selectSong} from './actions'
import SongList from "./components/SongList";

const App = () => {
  return (
    <div>
      App
      <SongList />
    </div>
  );
};

export default App;
