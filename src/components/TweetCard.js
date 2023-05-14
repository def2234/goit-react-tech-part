import {
  Btn,
  Div,
  Img,
  Li,
  P,
  SvgBoy,
  SvgLabel,
  SvgRectangle,
  Ul,
} from './TweetCards-styled';
import image from '../images/picture.png';
import svg from '../images/svgSprite.svg';
import { nanoid } from 'nanoid';

function TweetCard({ tweets, setTweets }) {
  const handleFollowUser = id => {
    const userFollow = tweets.map(tweet => {
      if (tweet.id === id) {
        return {
          ...tweet,
          following: true,
          followers: tweet.followers + 1,
        };
      }
      return tweet;
    });
    setTweets(userFollow);

    localStorage.setItem('tweets', JSON.stringify(userFollow));
  };

  const handleUnfollowUser = id => {
    const userUnFollow = tweets.map(tweet => {
      if (tweet.id === id) {
        return {
          ...tweet,
          following: false,
          followers: tweet.followers - 1,
        };
      }
      return tweet;
    });
    setTweets(userUnFollow);

    localStorage.setItem('tweets', JSON.stringify(userUnFollow));
  };

  return (
    <Ul>
      {tweets.length > 0 &&
        tweets.map(tweet => {
          return (
            <Li key={nanoid()}>
              <Img src={image} alt="avatar" width="308px" height="168" />

              <SvgBoy width="80px" height="80px">
                <use href={`${svg}#icon-Boy`} />
              </SvgBoy>
              <SvgLabel width="76px" height="22px">
                <use href={`${svg}#icon-Logo`} />
              </SvgLabel>
              <SvgRectangle width="380px" height="8px">
                <use href={`${svg}#icon-Rectangle`} />
              </SvgRectangle>

              <Div>
                <P>{tweet.tweets} Tweets</P>
                <P>{tweet.followers} Followers</P>
              </Div>

              <Btn
                follow={tweet.following}
                onClick={() =>
                  !tweet.following
                    ? handleFollowUser(tweet.id)
                    : handleUnfollowUser(tweet.id)
                }
              >
                {tweet.following ? 'Following' : 'Follow'}
              </Btn>
            </Li>
          );
        })}
    </Ul>
  );
}

export default TweetCard;
