/* eslint-disable react/prop-types */
import axios from "axios";

export function GamesNew() {
  const handleCreateGame = (event) => {
    event.preventDefault();
    const params = {};
    const form = document.getElementById("createGameForm");
    params.bgg_id = new FormData(form).get("bgg_id");
    console.log("handleCreateGame", params);
    axios.post("http://localhost:3000/games.json", params);
  };

  return (
    <div>
      <h1>Enter Board Game Geek ID:</h1>
      <form id="createGameForm" onSubmit={handleCreateGame}>
        <div>
          BGG ID: <input name="bgg_id" type="text" />
        </div>
        <button type="submit">Add game to database</button>
      </form>
    </div>
  );
}
