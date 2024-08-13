// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from "../Profile/Profile"
import FriendList from "../FriendList/FriendList"
import TransactionHistory from "../TransactionHistory/TransactionHistory"

import UserData from "../Data/UserData.json"
import friends from "../Data/friends.json"
import transactions from "../Data/TransactionHistory.json"


function App() {
  return (
    <>
          <Profile
        name={UserData.username}
        tag={UserData.tag}
        location={UserData.location}
        image={UserData.avatar}
        stats={UserData.stats}
    />
    <FriendList friends={friends}/>

      <TransactionHistory items={transactions} />
    </>

  
  )
}

export default App
