import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsContainer}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendsList}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
           
            />
          </li>
        );
      })}
    </ul>
  );
}

