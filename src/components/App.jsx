import user from '../user.json';
import PropTypes from 'prop-types';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return [
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.followers}
      likes={user.stats.likes}
      key="profile"
    />,
    <Statistics key="Statistics" />,
    <FriendList key="FriendList" />,
    <TransactionHistory key="TransactionHistory" />,
  ];
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
