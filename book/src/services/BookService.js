import axios from "axios";
export const findAll = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/' + id)
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const update = async (id) => {
    try {
        const result = await axios.put('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/' + id)
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const deleteById = async (id) => {
    try {
        const result = await axios.delete('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/' + id)
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const save = async (book) => {
    try {
        const result = await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
        return result.data;
    }catch (e) {
        console.log(e)
    }
}