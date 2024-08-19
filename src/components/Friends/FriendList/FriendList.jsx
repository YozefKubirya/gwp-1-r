import FriendListCard from "../FriendListCard/FriendListCard"
import css from '../FriendList/FriendList.module.css'
export default function FriendList({friends}){
   return(
      <><ul className={css.list}>
      {friends.map((friend)=>{
return <li key={friend.id} className={css.li}><FriendListCard name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline}/></li>
      })}
      </ul>
      </>
   )
}