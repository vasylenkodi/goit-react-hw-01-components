import friends from '../../friends.json';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <ul className="friend-list">
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
