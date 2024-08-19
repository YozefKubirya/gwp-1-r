import clsx from 'clsx';
import css from '../FriendListCard/FriendListCard.module.css';

export default function FriendListCard ({avatar,name,isOnline}){
// const toggle=isOnline? css.isOnline : css.isOffline;
   return(<>
   <div className={css.container}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={clsx(css.container,isOnline?css.isOnline:css.isOffline)}>{isOnline?'Online': 'Offline'}</p>


</div>
   </>)
}