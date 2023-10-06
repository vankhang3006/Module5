import React, { Component } from "react";
import axios from "axios";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/books")
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch(err => {
                throw err;
            });
    }

    handleCreate = () => {
        window.location.href = "/book/add";
    };

    render() {
        const { books } = this.state;
        return (
            <div>
                <h1>Books</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <a href={`/book/${book.id}`}>Edit</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button type="button" onClick={this.handleCreate}>
                    Create
                </button>
            </div>
        );
    }
}

export default Books;
