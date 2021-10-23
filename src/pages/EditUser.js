import React, {useState, useEffect}from 'react'
import User from './User'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
const EditUser = ({onUpdate}) => {
    const history = useHistory()
    const {id} = useParams()    
    const [formData, setFormData] =  useState({
        email: [],
        firs_name: [],
        last_name: []
    })
    const fetchUser = async () => {
        const res = await fetch(`https://reqres.in/api/users/${id}`)
        const json = await res.json()
        const {email, last_name, first_name} = json;
        console.log(json)
        return json;
    }
    useEffect(()=> {
        const getUsers = async ()=> {
            const data = await fetchUser();
            setFormData(data.data)
          }
          getUsers();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("UPDATES FOR CURRENT USER", formData)
        
        setFormData({
            email: '',
            first_name: '',
            last_name: ''
        })
        history.push('/users')
    }

    return (
        <div>
        <div className="container">
            <h4 className="mt-5 ml-5">Edit User {id}</h4>
            <form className="" onSubmit={handleSubmit}>
            <input className="form-control my-2" name="email" type="email" 
            value={formData.email} 
            onChange={(e)=> setFormData({...formData, email:e.target.value})} placeholder="Email" />
            <input className="form-control my-2" name="first_name" type="text" 
            value={formData.first_name}  
            onChange={(e)=>  setFormData({...formData, first_name:e.target.value})} placeholder="FirstName"/>
            <input className="form-control my-2" name="last_name" type="text"  
            value={formData.last_name} onChange={(e)=>  
            setFormData({...formData, last_name:e.target.value})} placeholder="LastName"/>
            <div className="d-flex">
                <section className=""><input type="submit" value="Update " className="btn btn-danger my-5"/></section>
                <section className="px-3"> <input type="submit" value="Cancel" className="btn btn-primary my-5"/></section>
            </div>
            </form>
  
            <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className="form-control">
                <small><strong>{formData.email}</strong></small>
                <small><strong>{formData.first_name}</strong> </small>
                <small><strong>{formData.last_name}</strong> </small>
            </section>
            </div> 
        </div>
        
    )
}

export default EditUser
