import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Field, Form, Formik} from "formik"; // Import CSS
import * as bookService from "../services/BookService"

export function Create() {
    const [books, setBooks] = useState([]);
    // state
    const [state, setState] = useState();

    useEffect(() => {
        fetchApi().then(data => console.log(data));
    }, [])

    const fetchApi = async () => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setBooks(result.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleCreateData = async (values) => {
        try {
            const result = await bookService.save(values)
            console.log(result)
            await fetchApi()
            return result.data;
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <h1>Add a new book</h1>
            <Formik initialValues={{
                id: '',
                title: '',
                quantity: ''
            }} onSubmit={(values) => {
                // eslint-disable-next-line no-undef
                handleCreateData(values).then(data => console.log(data));
            }
            }>
                <Form>
                    <div>
                        <label htmlFor="inputTitle">Title</label>
                        <Field type="text" className="form-control" id="inputTitle"
                               name='title'/>
                    </div>
                    <div>
                        <label htmlFor="inputQuantity">Quantity</label>
                        <Field type="text" className="form-control" id="inputQuantity"
                               name='quantity'/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}