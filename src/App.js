import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchAnimeList } from './features/anime/animeSlice';
import AnimeList from './AnimeList';
import Anime from './Anime';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AnimeList} />
          <Route exact path="/anime/:anime" component={Anime} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
