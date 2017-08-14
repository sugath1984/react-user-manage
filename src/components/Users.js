import React from 'react';
import UserApi from './Api';
import { Link } from 'react-router-dom';
import  DeleteUser from './DeleteUser';

let Users = React.createClass({

    getInitialState: function () {
        return {
            users : UserApi.all()
        }
    },
    deleteUser : DeleteUser,
    createUser : function (e) {

        var firstName = this.refs.firstName.value;
        var lastName = this.refs.lastName.value;
        var address = this.refs.address.value;
        var countryCode = this.refs.countryCode.value;
        var dob = this.refs.dob.value;
        var email = this.refs.email.value;
        var image = this.refs.image.value.split("\\").pop(-1);


        var newUser = {
            number : this.getLastIndex() + 1,
            name : firstName + lastName,
            firstName : firstName,
            lastName : lastName,
            address : address,
            countryCode : countryCode,
            dateOfBirth : dob,
            email: email,
            image : image,
        }
        e.preventDefault();
        this.getInitialState().users.push(newUser);
        this.setState({data: this.getInitialState().users});
        this.refs.userCreateForm.reset();

    },
    getLastIndex : function () {
        var last = 0;
        this.getInitialState().users.map((todo, index) =>
            last ++
        );

        return last;
    },
    render: function () {
    return (
        <div>
            <h2 className="center-block">Users</h2>
            {
                <table>
                    <tbody>
                    {
                        this.state.users.slice().map(p => (
                            <tr key={ p.number }>
                                <td><Link  to={ `/profile/${ p.number }` }>{p.name}</Link></td>
                                <td><button className="btn-danger" onClick={ this.deleteUser.bind(this, p.number) }> Delete </button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            }
            <hr/>
            <h2 className="center-block">Create User</h2>
            <form className="form-inline" name="userCreateForm" ref="userCreateForm" onSubmit={ this.createUser }>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" placeholder="e.x.sugath" ref="firstName" className="form-control" required/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="e.x.fernando" ref="lastName" className="form-control" required/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="e.x.23 panadura" ref="address" className="form-control" required/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="countryCode"> Contact with Country Code </label>
                    <input type="text" id="countryCode" placeholder="e.x.lk" ref="countryCode" className="form-control" required/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="text" id="dob" placeholder="e.x.1984-12-09" ref="dob" className="form-control" required/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="e.x.s@y.com" ref="email" className="form-control" required/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" ref="image" name="file" />
                </div>
                <br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )}
})

export default Users