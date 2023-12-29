import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { GamesShow } from "./GamesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Collection } from "./Collection";
import { GamesShowPage } from "./GamesShowPage";

export function Content() {
  const [games, setGames] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState({});

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };

  const handleAddToCollection = (game) => {
    console.log("handleAddToCollection");
    const params = { game_id: game.id };
    axios.post(`http://localhost:3000/user_games.json`, params);
  };

  const handleRemoveFromCollection = (user_game) => {
    console.log("handleRemoveFromCollection");
    const params = { id: user_game.id };
    axios.delete(`http://localhost:3000/user_games/${params.id}.json`, params);
  };

  const handleShowGame = (game) => {
    console.log("handleShowGame", game);
    setIsGamesShowVisible(true);
    setCurrentGame(game);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGamesShowVisible(false);
  };

  useEffect(handleIndexGames, []);

  return (
    <main className="container">
      <Routes>
        <Route
          path=""
          element={
            <GamesIndex
              games={games}
              onShowGame={handleShowGame}
              onAddToCollection={handleAddToCollection}
              onRemoveFromCollection={handleRemoveFromCollection}
            />
          }
        />
        <Route
          path="/games"
          element={
            <GamesIndex
              games={games}
              onShowGame={handleShowGame}
              onAddToCollection={handleAddToCollection}
              onRemoveFromCollection={handleRemoveFromCollection}
            />
          }
        />
        <Route
          path="/home"
          element={
            <GamesIndex
              games={games}
              onShowGame={handleShowGame}
              onAddToCollection={handleAddToCollection}
              onRemoveFromCollection={handleRemoveFromCollection}
            />
          }
        />
        <Route path="games/:id" element={<GamesShowPage onAddToCollection={handleAddToCollection}
              onRemoveFromCollection={handleRemoveFromCollection}/>} />
        <Route path="/add-a-game" element={<GamesNew />} />
        <Route
          path="/collection/:username"
          element={<Collection onShowGame={handleShowGame} onRemoveFromCollection={handleRemoveFromCollection} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
      </Routes>

      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} />
      </Modal>
    </main>
  );
}
