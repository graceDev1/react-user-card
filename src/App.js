import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SocialCard from './components/social/social.component';

function App() {
  const [users, setUsers] = useState([]);
  const [userAll, setUserAll] = useState([]);

  useEffect(()=>{
    axios.get('https://randomuser.me/api/?results=15')
    .then(res => {
      setUsers(res.data.results)
      setUserAll(res.data.results)
    })
    .catch(err=> console.log(err))
  },[])

  const searchUsers = (e) =>{
    let value = e.target.value.toLowerCase();
    const filterUser = userAll.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)))
    setUsers(filterUser);
  }

  return (
    <div className="App">
      <h1> Users Social </h1>
      <input type='text' onInput={searchUsers} className='search-box' placeholder='Search ...'/>
      <div className='cards-container'>
        {users.map((user,index)=>(
          <SocialCard user={user} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
