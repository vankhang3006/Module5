import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Library from '../services/LibraryService';
import { toast } from "react-toastify";

export const List = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Bạn có thể điều chỉnh số mục trên mỗi trang

    useEffect(() => {
        FetchAPI();
    }, [searchTerm]);

    const FetchAPI = async () => {
        const result = await Library.getAll();
        setBooks(result);
    }

    const remove = async (id) => {
        try {
            await Library.Delete(id);
            toast('🦄 Xoá sách thành công!!!!');
        } catch (e) {
            console.error('Lỗi khi xoá', e);
            toast.error('Xoá thất bại');
        }
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Thiết lập lại trang về trang đầu tiên khi tìm kiếm
    }

    // Lọc danh sách sách dựa trên từ khóa tìm kiếm
    const filteredBooks = books.filter(book => book.title.includes(searchTerm));

    // Tính toán chỉ số của mục đầu và mục cuối để hiển thị trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

    // Các hàm phân trang
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <h1>Library<NavLink to="/create" style={{ float: "right" }} className="btn btn-success">Add new book</NavLink></h1>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text" className="form-control" placeholder="Search by title" aria-label="Username" aria-describedby="basic-addon1" onChange={handleSearch} />
            </div>
            <p></p>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {currentBooks.map((book) => (
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
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(filteredBooks.length / itemsPerPage) ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}