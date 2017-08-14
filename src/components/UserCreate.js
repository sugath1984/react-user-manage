import React from 'react';
import PlayerApi from './Api';
import { Link } from 'react-router-dom'


let UserCreate = React.createClass({
    getInitialState: function () {
        return {
            users : PlayerApi.all()
        }
    },
    createUser : function(e) {
        var firstName = this.refs.firstName.value;
        var lastName = this.refs.lastName.value;
        var address = this.refs.address.value;
        var countryCode = this.refs.countryCode.value;
        var dob = this.refs.dob.value;
        var email = this.refs.email.value;
        var image = this.refs.image.value;

        var newUser = {
            number : 7,
            name : firstName + lastName,
            firstName : firstName,
            lastName : lastName,
            address : address,
            countryCode : countryCode,
            dateOfBirth : dob,
            email: email,
            image : image,
        }

        this.getInitialState().users.push(newUser);
        this.setState({data: this.getInitialState().users});


        e.preventDefault();
    },
    getLastNumber : function () {
        console.log(this.getInitialState().users.count);
    },

    render : function() {
    return (
        <div>
            <form className="form-inline" ref="fruitForm" onSubmit={this.createUser}>
                <div className="form-group">
                    <label htmlFor="fruitItem">
                        First Name
                        <input type="text" id="firstName" placeholder="e.x.sugath" ref="firstName" className="form-control" />
                    </label>
                    <br/>
                    <label htmlFor="fruitItem">
                        Last Name
                        <input type="text" id="lastName" placeholder="e.x.fernando" ref="lastName" className="form-control" />
                    </label>
                    <br/>
                    <label htmlFor="fruitItem">
                        Address
                        <input type="text" id="address" placeholder="e.x.23 panadura" ref="address" className="form-control" />
                    </label>
                    <br/>
                    <label htmlFor="fruitItem">
                        Contact with Country Code
                        <input type="text" id="countryCode" placeholder="e.x.lk" ref="countryCode" className="form-control" />
                    </label>
                    <br/>
                    <label htmlFor="fruitItem">
                        Date of Birth
                        <input type="text" id="dob" placeholder="e.x.1984-12-09" ref="dob" className="form-control" />
                    </label>
                    <br/>
                    <label htmlFor="fruitItem">
                        Email
                        <input type="text" id="email" placeholder="e.x.s@y.com" ref="email" className="form-control" />
                    </label>
                    <br/>
                    <label htmlFor="fruitItem">
                        Image
                        <input type="text" id="image" placeholder="e.x.test.jpg" ref="image" className="form-control" />
                    </label>
                    <br/>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
            <Link to='/users'>Back</Link>
        </div>
    )}
})

export default UserCreate;