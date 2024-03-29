import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from './components/user'

function App() {
  
  const [users, setUsers] = useState([{
     id: null,
     name: '',
     username: '',
     email: ''
  }])

  const hdlClick = evt => {

    evt.preventDefault()

    const url = 'https://jsonplaceholder.typicode.com/users'

   // const fetch = require('cross-fetch')

    fetch(url)
      .then(res => {
          if (res.status >= 400)
            throw new Error(`Error status: ${res.status}`)

          //console.log(usrdt)
          return res.json()
      })
      .then( usrs => {

        

        //console.log(f3)
        
        setUsers([...users, ...usrs])
        //setUsers([{id: usrs.id, name: usrs.name, username: usrs.username, email: usrs.email}])

        //console.log(usrs)
       
      })
      .catch(err => {
        console.log(err)
      })
  }

  async function printAny() {
    return 'Hi there'
  }
  const TestClick = obj => {
     
     console.log(printAny())
  }
  
  return (
    <div className="App">
        <h1>Das ist ein test</h1>
        <button type="submit" onClick={e => TestClick(e)}>Get Users</button>
        {/* <User /> */}

         {
           users.map(usr => (
            <User key={uuidv4()}  name={usr.name} username={usr.username} email={usr.email}/>
           ) )
         }
    </div>
  )
}

export default App;
