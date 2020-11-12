import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/Action'

function Login(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const auth=(e)=>{
        e.preventDefault()
        let regex = /^(([^<>()[\]\\.,;!@`~#$%^+&/*():?'|{}\s@"]+(\.[^<>()[\]\\.,;!@`~#$%^&/+*():?'|{}\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.trim().length===0){
            alert("Name field cannot be left blank.")
            return
        }else if(email.trim().length===0){
            alert("Email field cannot be left blank.")
            return
        }else if(!regex.test(email)){
            alert("Invalid Email")
            return
        }
        props.login({name:name,email:email})
    }
    return (
        <div className="center">
            <div className="text-center mt-3 mb-3">
                <div>Welcome to</div>
                <img className="" src={'images/logo.png'} alt="Profile Img" />
            </div>
            <form className="loginForm">
                <div className="form-group">
                    <label htmlFor="pwd">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" name="email" />
                </div>
               <button type="submit" onClick={(e)=>auth(e)} className="btn btn-success mt-4">Login</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {login})(Login);
