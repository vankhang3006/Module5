import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Field, Form, Formik} from "formik"; // Import CSS
import * as bookService from "../services/BookService"

export function List() {
    const [books, setBooks] = useState([]);
    // state
    const [state, setState] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll();
            setBooks(result)
        }
        fetchApi()
    }, [])


    return (
        <>
            <h1>Library</h1>
            {/*<Formik initialValues={{*/}
            {/*    id: '',*/}
            {/*    title: '',*/}
            {/*    quantity: ''*/}
            {/*}} onSubmit={(values) => {*/}
            {/*    // eslint-disable-next-line no-undef*/}
            {/*    handleCreateData(values).then(data => console.log(data));*/}
            {/*}*/}
            {/*}>*/}
            {/*    <Form>*/}
            {/*        <div>*/}
            {/*            <Field type="text" className="form-control" id="exampleInputBook"*/}
            {/*                   name='book'/>*/}
            {/*            <button type="submit" className="btn btn-primary">Submit</button>*/}
            {/*        </div>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <a>Delete</a>
                                    <a>Edit</a>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
}