import friends from '../../friends.json';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        );
      })}
    </ul>
  );
};
