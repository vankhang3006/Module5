import { Component } from 'react';
const studentList = [
    {
        id: "1",
        name: "Nguyễn Văn Khang",
        age: 22,
        address: "Đà Nẵng",
    },
    {
        id: "2",
        name: "Nguyễn Văn Thanh Hùng",
        age: 25,
        address: "TP Hồ Chí Minh",
    },
    {
        id: "3",
        name: "Nguyễn Văn Thắng",
        age: 20,
        address: "Hà Nội",
    }
]
export class StudentInfoComponent extends Component {
    render() {
        return (
            <div>
                <table >
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {studentList.map(student =>(
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}