/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Collection(props) {
  const [collection, setCollection] = useState([]);
  const params = useParams();

  const handleIndexCollection = () => {
    console.log("handleIndexCollection");
    axios.get(`http://localhost:3000/user_games.json?username=${params.username}`).then((response) => {
      console.log(response.data);
      setCollection(response.data);
    });
  };
  useEffect(handleIndexCollection, []);

  return (
    <div>
      <h1 className="games-h1">{params.username}&apos;s games</h1>
      {collection.length > 0 ? (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
          {collection.map((user_game) => (
            <div key={user_game.id} className="col">
              <div className="card" id="collection-card">
                <img src={user_game.game.image_url} className="card-img-top img-fluid" id="collection-card-image" />
                <div className="card-body">
                  <h5 className="card-title txt-fluid">{user_game.game.game_name}</h5>
                  <br></br>
                  <a className="card-link" onClick={() => props.onShowGame(user_game.game)}>
                    More info
                  </a>
                  <button className="btn btn-danger btn-sm col" onClick={() => props.onRemoveFromCollection(user_game)}>
                    Remove from collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1>There are no games in this collection. Wow, that is so sad.</h1>
          <img id="keanu" src="https://i.kym-cdn.com/entries/icons/original/000/002/862/SadKeanu.jpg" alt="" />
        </>
      )}
    </div>
  );
}
