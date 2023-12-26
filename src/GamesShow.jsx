/* eslint-disable react/prop-types */
export function GamesShow(props) {
  return (
    <div>
      <h1>game information</h1>
      <img id="modal-game-photo" src={props.game.image_url} />
      <p>Name: {props.game.game_name}</p>
      <p>Release: {props.game.release_year}</p>
      <p>Description: {props.game.description}</p>
      <a href={`https://boardgamegeek.com/boardgame/${props.game.bgg_id}`}>BGG ID: {props.game.bgg_id}</a>
    </div>
  );
}
