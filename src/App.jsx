import './App.css'
import FriendList from './components/Friends/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import TransactionHistory from './components/Transactions/TransactionHistory'
import { userData, friends ,transactions} from './data/data'
function App() {


  return (
    <>
      <Profile  name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions}/>
    </>
    
)}

export default App
