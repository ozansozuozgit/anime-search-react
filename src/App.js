import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,useLocation } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchAnimeList } from './features/anime/animeSlice';
import AnimeList from './AnimeList';
import Anime from './Anime';
import { AnimatePresence } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={AnimeList} />
            <Route exact path="/:id/:anime" component={Anime} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
