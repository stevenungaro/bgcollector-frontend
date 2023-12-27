/* eslint-disable react/prop-types */
export function GamesIndex(props) {
  return (
    <div>
      <h1>All games</h1>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {props.games.slice(0, 60).map((game) => (
          <div key={game.id} className="col">
            <div className="card" id="games-index-card">
              <img src={game.image_url} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title txt-fluid">{game.game_name}</h5>
                <br></br>
                <button className="btn btn-outline-info" onClick={() => props.onShowGame(game)}>
                  More info
                </button>
                <button className="btn btn-outline-success" onClick={() => props.onAddToCollection(game)}>
                  Add to collection
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
