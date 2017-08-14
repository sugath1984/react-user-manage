
const UserAPI = {

    users: [
        { number: 1, name: "Sugath Chaminda", firstName: "Sugath", lastName: "Fernando", address: "Panadura", countryCode: "LK", dateOfBirth: "1984-12-09", email: 's@y.com', image: "user1.png" },
        { number: 2, name: "Sagara Jayathilake", firstName: "Sagara", lastName: "Jayathilake", address: "Moratuwa", countryCode: "LK", dateOfBirth: "1984-12-12", email: 's@y.com', image: "2.jpg" },
        { number: 3, name: "Chaminda Bandara", firstName: "Chaminda", lastName: "Bandara", address: "colombo", countryCode: "LK", dateOfBirth: "1984-09-09",email: 's@y.com', image: "3.png" },
        { number: 4, name: "Kalpa Madushan", firstName: "Kalpa", lastName: "Madushan", address: "Moratuwa", countryCode: "LK", dateOfBirth: "1984-11-09",email: 's@y.com', image: "user1.png" },
        { number: 5, name: "Pubudu Perera", firstName: "Pubudu", lastName: "Perera", address: "Panadura", countryCode: "LK", dateOfBirth: "1984-12-06", email: 's@y.com', image: "2.jpg" },
        { number: 6, name: "Ashan ganlath", firstName: "Ashan", lastName: "ganlath", address: "colombo", countryCode: "LK", dateOfBirth: "1984-12-31", email: 's@y.com', image: "3.png" },
    ],

    all: function() {
        return this.users
    },
    get: function(id) {
        const isUser = p => p.number === id
        return this.users.find(isUser)
    },
    delete: function (id) {
        const isUser = p => p.number === id
        return this.users.delete(isUser)
    },
    add: function () {
        
    }
}

export default UserAPI
