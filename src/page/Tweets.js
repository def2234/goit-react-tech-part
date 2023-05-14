import TweetCard from 'components/TweetCard';

import { useEffect, useState } from 'react';
import { GetUsers } from 'usersApi/UsersApi';

import { Link } from 'react-router-dom';

function Tweets() {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem('tweets')) || []
  );
  const [page, setPage] = useState(1);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetUsers(page)
      .then(response => {
        console.log(response);
        setTweets(prevTweets => [...prevTweets, ...response.data]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const storedTweets = localStorage.getItem('tweets');
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  return (
    <div className="app">
      <h1>Tweet Cards</h1>
      <Link to="/">Back</Link>

      <TweetCard tweets={tweets} setTweets={setTweets} />

      {IsLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default Tweets;
