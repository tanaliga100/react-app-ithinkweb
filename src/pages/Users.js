import React, {useState }from 'react'
import { Link } from 'react-router-dom'
import {Button, Table} from 'reactstrap'
import User from './User'
import AddUser from '../components/AddUser/AddUser'
const Users = ({users, onDelete, onUpdate, onAdd, onToggle, showForm}) => {

    return (
        <div className="mt-3">
        <div className="mb-5">
        <Button className="btn btn-warning button m-3" onClick={onToggle}> 
        {showForm ? "Close" : "AddUser"} 
        </Button>
        </div>
        {showForm &&
        <AddUser onAdd={onAdd}/>
        }
        <Table hover className="align-items-center container">
            <thead>
                <tr>
                <th>Avatar</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
           
            {users.map(user => (
                <tr key={user.id}>
                <td><img style={{width:"40px"}}src={user.avatar} alt="" /></td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>  
                <Link to={`/user/edit/${user.id}`}>
                <Button className="btn btn-success" onClick={()=> onUpdate(user.id)}>Edit</Button>
                </Link>
                </td>
                <td><Button className="btn btn-danger" onClick={()=> onDelete(user.id)}>Delete</Button></td>
                </tr>
                ))}
            </tbody>
        </Table>
        </div>
    )
}

export default Users
