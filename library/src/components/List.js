import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as Library from '../services/LibraryService'
import {toast} from "react-toastify";
export const List = () => {
    const [Book, setBook] = useState([])
    useEffect(() => {
        FetchAPI()
    }, [Book])
    const FetchAPI = async () => {
        const result = await Library.getAll();
        setBook(result)
    }
    const remove = async (id) =>{
        try {
            await Library.Delete(id)
            toast('🦄 Delete book successfully!!!!');
            // FetchAPI()
        }catch (e){
            console.error('Remove error', e);
            toast.error('Remove failed');
        }
    }
    return (
        <>
            <h1>Library<NavLink to="/create" style={{float: "right"}} className="btn btn-success">Add a new book</NavLink></h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {Book.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink className='btn btn-primary' to={`/update/${book.id}`}>Edit</NavLink>&nbsp;
                            <button className='btn btn-danger' onClick={() => remove(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}