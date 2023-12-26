/* eslint-disable react/prop-types */
export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="game_name" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>
        <div>
          Release Year: <input name="release_year" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          BGG ID: <input name="bgg_id" type="text" />
        </div>
        <button type="submit">Create game</button>
      </form>
    </div>
  );
}
