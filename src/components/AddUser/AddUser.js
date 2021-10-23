import React, {useState}from 'react'
import '../../App.css'
const AddUser = ({onAdd}) => {

    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [avatar, setAvatar] = useState()
    const [validate, setValidate] = useState(false)

    const onSubmit= (e) => {
        e.preventDefault()
        if(!email || !first_name || !last_name ){
            alert("Please Fill in all Fields")
            return;
        }
        onAdd({email, first_name, last_name})

        setEmail("")
        setFirstName("")
        setLastName("")
        setAvatar("")
    }
    return (
      
        <div className="add-form">
            <form onSubmit={onSubmit} className="container">
                <input className="form-control my-2" type="email"  value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                <input className="form-control my-2" type="text" value={first_name} onChange={(e)=> setFirstName(e.target.value)} placeholder="FirstName"/>
                <input className="form-control my-2" type="text" value={last_name} onChange={(e)=> setLastName(e.target.value)} placeholder="LastName"/>
                <input type="submit" value="Add " className="btn btn-success my-5"/>
            </form>
          
        </div>
    )
}

export default AddUser
