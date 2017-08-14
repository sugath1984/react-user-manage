let DeleteUser;
DeleteUser = function (parameters) {
    let item = parameters.item;
    var data = this.getInitialState().users;
    data.splice(data.indexOf(item), 1);
    this.setState({ data: data })
};

export default DeleteUser;