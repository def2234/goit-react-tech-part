import {
  Btn,
  Div,
  Img,
  ImgBoy,
  ImgLogo,
  ImgRectangle,
  Li,
  P,
  Ul,
} from './TweetCards-styled';
import image from '../images/picture.png';
import image1 from '../images/Boy.svg';
import image2 from '../images/rectangle.svg';
import image3 from '../images/Logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from 'redux/selectors';
import { addFollow, deleteFollow } from 'redux/tweetsSlice';

function TweetCard() {
  const tweets = useSelector(getTweets);

  const dispatch = useDispatch();

  const handleFollowUser = id => {
    const userFollow = tweets.map(tweet => {
      if (tweet.id === id) {
        return {
          ...tweet,
          follow: true,
          followers: tweet.followers + 1,
        };
      }
      return tweet;
    });

    console.log(userFollow);

    dispatch(addFollow(userFollow));
  };

  const handleUnfollowUser = id => {
    const userUnFollow = tweets.map(tweet => {
      if (tweet.id === id) {
        return {
          ...tweet,
          follow: false,
          followers: tweet.followers - 1,
        };
      }
      return tweet;
    });
    dispatch(deleteFollow(userUnFollow));
  };

  return (
    <Ul>
      {tweets.length > 0 &&
        tweets.map(tweet => {
          return (
            <Li key={tweet.id}>
              <Img src={image} alt="avatar" width="308px" height="168" />
              <ImgBoy src={image1} alt="boy" width="80px" height="80px" />
              <ImgRectangle
                src={image2}
                alt="Rectangle"
                width="380px"
                height="8px"
              />
              <ImgLogo src={image3} alt="Logo" width="76px" height="22px" />

              <Div>
                <P>{tweet.tweets} Tweets</P>
                <P>{tweet.followers} Followers</P>
              </Div>

              <Btn
                follow={tweet.follow}
                onClick={() =>
                  !tweet.follow
                    ? handleFollowUser(tweet.id)
                    : handleUnfollowUser(tweet.id)
                }
              >
                {tweet.follow ? 'Follow' : 'Following'}
              </Btn>
            </Li>
          );
        })}
    </Ul>
  );
}

export default TweetCard;
