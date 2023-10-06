
const UserReducer = (users = [], action) => {
    const {payload, type} = action;
    switch (type) {
        case "get_all":
            return payload;
        case "DELETE_USER":
            // Xóa người dùng có id được chỉ định khỏi danh sách users
            return users.filter(user => user.id !== payload);
        default:
            return users;
    }
}


export default UserReducer;