export const FriendListItem = ({isOnline, avatar, name} ) => {
  return (
    <li className="item">
      <span className={isOnline ? 'is-online' : 'is-offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
