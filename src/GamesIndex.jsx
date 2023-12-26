/* eslint-disable react/prop-types */
export function GamesIndex(props) {
  return (
    <div>
      <h1>All games</h1>
      {props.games.slice(0, 20).map((game) => (
        <div key={game.id}>
          <h2>{game.game_name}</h2>
          <img id="game-photo" src={game.image_url} />
          <button onClick={() => props.onShowGame(game)}>More info</button>
        </div>
      ))}
    </div>
  );
}
