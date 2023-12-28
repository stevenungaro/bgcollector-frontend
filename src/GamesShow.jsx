/* eslint-disable react/prop-types */
export function GamesShow(props) {
  const decodedDescription = new DOMParser().parseFromString(props.game.description, "text/html").body.textContent;

  return (
    <div>
      <h1 className="text-center">game information</h1>
      <div className="modal-content">
        <div className="row">
          <div className="col-md-3">
            <img id="modal-game-photo" src={props.game.image_url} />
            <p>Name: {props.game.game_name}</p>
            <p>Released: {props.game.release_year}</p>
            <a href={`/games/${props.game.id}`}>Go to game page</a>
            <br></br>
            <a href={`https://boardgamegeek.com/boardgame/${props.game.bgg_id}`}>BGG ID: {props.game.bgg_id}</a>
          </div>
          <div className="col-md-8">
            <p id="modal-description">{decodedDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
