import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function GamesShowPage() {
  const [game, setGame] = useState({});
  const params = useParams();

  const handleShowGame = () => {
    axios.get(`http://localhost:3000/games/${params.id}.json`).then((response) => {
      setGame(response.data);
    });
  };

  useEffect(handleShowGame, []);

  // This takes in the game description which contains html coding from the xml response on BGG's api and converts it for a cleaner display on the front end.
  const decodedDescription = new DOMParser().parseFromString(game.description, "text/html").body.textContent;

  return (
    <div id="games-show-page">
      <h1> Game Info</h1>
      <h2>{game.game_name}</h2>
      <h3>({game.release_year})</h3>
      <img id="games-show-page-photo" src={game.image_url} />
      <p>{game.game_type}</p>
      <p>{decodedDescription}</p>
    </div>
  );
}
