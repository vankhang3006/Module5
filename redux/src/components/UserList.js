import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUserMiddle} from "../redux/middleware/UserMiddleware";
import * as userService from '../services/UserService'

function UserList() {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserMiddle())
    }, [])
    const remove = async (id) =>{
        try {
            // Gọi phương thức deleteUser từ service
            await userService.deleteUser(id);

            // Sau khi xóa thành công, cập nhật danh sách người dùng trong Redux
            dispatch({ type: 'DELETE_USER', payload: id });
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                <tr className="table">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td><button onClick={() => remove(user.id)}>Delete user</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;