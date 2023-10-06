import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetails() {
    const { bookId } = useParams();
    const isCreate = !bookId;
    const [book, setBook] = useState({});

    useEffect(() => {
        if (bookId) {
            axios
                .get(`http://localhost:8080/books/${bookId}`)
                .then(res => {
                    setBook(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [bookId]);

    function handleChange(event) {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        axios
            .post("http://localhost:8080/books", book)
            .then(res => {
                alert(
                    `${isCreate ? "Create" : "Edit"} book ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <div>
            <h1>book details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={book.id || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Title</label>
                    <input name="title" value={book.title || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input name="quantity" value={book.quantity || ""} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}