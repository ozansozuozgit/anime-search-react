import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchAnimeList } from './features/anime/animeSlice';
import AnimeList from './AnimeList';
import Anime from './Anime';
import { AnimatePresence } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={AnimeList} />
          <Route exact path="/:id/:anime" component={Anime} />
          <Route path="*" component={AnimeList} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
