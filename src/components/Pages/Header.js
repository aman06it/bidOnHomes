import React from 'react'
import { logout } from '../../redux/Action'
import { connect } from 'react-redux'

function Header(props) {
    return (
        <div className="header">
            <img src="images/logo.png" alt="Logo" />
            <div className="header-right">
                <span className="userEmail">Hi, {props.userData.name}</span>
                <button className="btn btn-success" onClick={()=>props.logout()}>Logout</button> 
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    userData:state.reducer.userData
})

export default connect(mapStateToProps, {logout})(Header);