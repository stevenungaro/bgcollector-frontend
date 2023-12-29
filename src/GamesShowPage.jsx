/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function GamesShowPage() {
  const [game, setGame] = useState({});
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState({});
  const [isEditClicked, setIsEditClicked] = useState(false);

  const params = useParams();

  const handleGetGameInfo = () => {
    axios.get(`http://localhost:3000/games/${params.id}.json`).then((response) => {
      setGame(response.data);
    });
  };

  const handleGetReviews = () => {
    axios.get(`http://localhost:3000/reviews.json?game_id=${params.id}`).then((response) => {
      setReviews(response.data);
      console.log(reviews);
    });
  };

  const handleUserReview = () => {
    axios.get(`http://localhost:3000/reviews/${params.id}.json`).then((response) => {
      setUserReview(response.data);
      console.log(userReview.review_text);
    });
  };

  const handleCreateReview = (event) => {
    event.preventDefault();
    console.log("handleCreateReview");
    const form = document.getElementById("createReviewForm");
    params.review_text = new FormData(form).get("review_text");
    params.game_id = game.id;
    console.log(params);
    axios.post(`http://localhost:3000/reviews.json`, params);
    window.location.reload();
  };

  const handleUpdateReview = (event) => {
    event.preventDefault();
    console.log("handleUpdateReview");
    const form = document.getElementById("updateReviewForm");
    params.review_text = new FormData(form).get("review_text");
    params.game_id = game.id;
    console.log(params);
    console.log(userReview.id);
    axios.patch(`http://localhost:3000/reviews/${userReview.id}.json`, params);
    window.location.reload();
  };

  const handleEditClicked = () => {
    setIsEditClicked(true);
    console.log(isEditClicked);
  };
  useEffect(handleGetGameInfo, []);
  useEffect(handleGetReviews, []);
  useEffect(handleUserReview, []);

  // This takes in the game description which contains html coding from the xml response on BGG's api and converts it for a cleaner display on the front end.
  const decodedDescription = new DOMParser().parseFromString(game.description, "text/html").body.textContent;

  return (
    <div id="games-show-page">
      <h1> Game Info</h1>
      <h2>
        {game.game_name} ({game.release_year})
      </h2>
      <img id="games-show-page-photo" src={game.image_url} />
      <br />
      <a href={`https://boardgamegeek.com/boardgame/${game.bgg_id}`}>BGG Game Page</a>
      <br />
      <p>{decodedDescription}</p>
      <h2>Your Review</h2>
      {userReview.game_id ? (
        <>
          {isEditClicked ? (
            <form id="updateReviewForm" onSubmit={handleUpdateReview}>
              <div>
                <textarea name="review_text" defaultValue={userReview.review_text} rows="6" cols="60" />
              </div>
              <button type="submit">Update review</button>
            </form>
          ) : (
            <>
              <a href="javascript:void(0)" onClick={handleEditClicked}>
                Edit
              </a>
              <p>{userReview.review_text}</p>
            </>
          )}
        </>
      ) : (
        <>
          {localStorage.jwt ? (
            <form id="createReviewForm" onSubmit={handleCreateReview}>
              <div>
                <textarea
                  name="review_text"
                  placeholder="You have not reviewed this game. Add your review now!"
                  rows="6"
                  cols="60"
                />
              </div>
              <button type="submit">Add review</button>
            </form>
          ) : (
            <h3>You are not logged in. Sorry, bro.</h3>
          )}
        </>
      )}
      <h2>User Reviews</h2>
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>{review.review_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
