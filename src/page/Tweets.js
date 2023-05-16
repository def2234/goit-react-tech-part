import TweetCard from 'components/TweetCard';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from 'redux/operationTweets';
import { getError, getTweets } from 'redux/selectors';
import { LinkNav } from './Tweets-styled';

function Tweets() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const tweets = useSelector(getTweets);
  // const page = useSelector(getPage);

  useEffect(() => {
    if (tweets.length === 0) {
      dispatch(fetchTweets(page));
    }
  }, [dispatch, tweets, page]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    dispatch(fetchTweets(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="app">
      {error && <h1>Oops, something went wrong!</h1>}
      <h1>Tweet Cards</h1>
      <LinkNav to="/">Back</LinkNav>

      <TweetCard />
      {tweets.length === 15 ? (
        <h1>The maximum number of requests has been reached!</h1>
      ) : (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default Tweets;
