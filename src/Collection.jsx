/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
export function Collection(props) {
  const [collection, setCollection] = useState([]);

  const handleIndexCollection = () => {
    console.log("handleIndexCollection");
    let username = localStorage.getItem("username");
    axios.get(`http://localhost:3000/user_games.json?username=${username}`).then((response) => {
      console.log(response.data);
      setCollection(response.data);
    });
  };
  useEffect(handleIndexCollection, []);

  return (
    <div>
      <h1>My games</h1>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {collection.map((user_game) => (
          <div key={user_game.game.game_name} className="col">
            <div className="card" id="games-index-card">
              <img src={user_game.game.image_url} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title txt-fluid">{user_game.game.game_name}</h5>
                <br></br>
                <button className="btn btn-outline-info" onClick={() => props.onShowGame(user_game.game)}>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
