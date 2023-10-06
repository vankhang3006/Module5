import {ErrorMessage, Field, Form, Formik, validateYupSchema} from "formik";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import * as LibraryService from "../services/LibraryService"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import React from "react";
export function Create() {
    let navigate = useNavigate();
    const initialValues = {
        title: '',
        quantity: ''
    }
    const validationSchema = Yup.object().shape({
        title : Yup.string().required('title is required '),
        quantity : Yup.number().required('quantity is required ').min(1,'Quantity must be at least 1')
    });

    const Submit = async (values) => {
        await LibraryService.addNew(values)
        console.log(values)
        navigate('/')
        toast('🦄 Add book successfully!!!!');
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={Submit}
            >
                <div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title" className="fw-bold">Title</label>
                            <Field name='title' type="text" className="form-control" id="title"
                                   placeholder="Title"/>
                            <ErrorMessage name='title' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity" className="fw-bold">Quantity</label>
                            <Field name='quantity' type="text" className="form-control" id="quantity"
                                   placeholder="Quantity"/>
                            <ErrorMessage name='quantity' className='text-danger'></ErrorMessage>
                        </div>
                        <p></p>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Add</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}