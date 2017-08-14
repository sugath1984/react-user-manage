import React from 'react'
import UserAPI from './Api'
import { Link } from 'react-router-dom'

const UserProfileDetails = (props) => {
    const user = UserAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!user) {
        return <div>Sorry, user was not found</div>
    }
    return (
        <div>
             <div>
                <h3>First Name : { user.firstName }</h3>
                <h3>Last Name : { user.lastName } </h3>
                <h3>Address: { user.address }</h3>
                <h3>Contact with Country Code : { user.countryCode }</h3>
                <h3>Date of Birth : { user.dateOfBirth }</h3>
                <h3>Email : { user.email }</h3>
                <h3>Image : <img alt="user profile" width="200" height="200" src={ require(`../images/${ user.image }`) } /></h3>
            </div>
            <Link to='/users'> <button className="btn btn-primary">Back</button> </Link>
        </div>
    )
}

export default UserProfileDetails
