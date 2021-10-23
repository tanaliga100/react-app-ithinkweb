import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {useEffect, useState} from 'react'
import NavbarComponent from './components/Navbar/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import EditUser from './pages/EditUser';

function App() {
  const [users, setUsers] = useState()
  const [showForm , setShowForm] = useState(false)

  const fetchUsers = async () => {
    const res = await   fetch("https://reqres.in/api/users?page=1")
    const json = await res.json() 
    const {page, total, data} = json;

    return data;
  }

  useEffect(() =>{
    const getUsers = async ()=> {
      const Users = await fetchUsers();
      setUsers(Users)
    }
    getUsers();
  },[])

    // ADD USERS
    const addUser = (user)=> {
      console.log("New USER",user)
      const id = Math.floor(Math.random() + 10)
      const newUser = {id, ...user}
      setUsers([...users, newUser])
    }

  // DELETE USERS
  const deleteUser =  (id)=> {
    setUsers(
      users.filter((user) => user.id !== id)
    )
    console.log("DELETED USER", id)
  }
  // UPDATE USER
  const updateUser = (id) => {
    console.log("UPDATED", id)
  }
  const onToggle = () => {
    setShowForm(!showForm)
    console.log('called')
  }
  
  return (
    <Router>
        <NavbarComponent/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/users">
            {users && <Users 
            users={users}
            onDelete={deleteUser}
            onUpdate={updateUser}
            onAdd={addUser}
            onToggle={onToggle}
            showForm={showForm}
            />}
          </Route>
          <Route path="/user/edit/:id" component={EditUser}/>
  
        </Switch>
    </Router>
  );
}

export default App;
