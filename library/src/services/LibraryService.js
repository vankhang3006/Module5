import axios from "axios";
const URL = "http://localhost:8080/books/";
export const getAll  = async () => {
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};
export const addNew = async (value) =>{
    try{
        const result =  await axios.post(URL, value)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const FindById = async (id) =>{
    try{
        const result =  await axios.get(URL+id)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const Update = async (id,value) =>{
    try{
        const result =  await axios.put(URL+id, value)
        return result.data
    }catch (e){
        console.log(e)
    }
}
// export const Delete = async (id) =>{
//     try{
//         const result =  await axios.delete(URL+id)
//         return result.data
//     }catch (e){
//         console.log(e)
//     }
export const Delete = async (id) => {
    try {
        const result = await axios.delete(URL + id);
        return result.data;
    } catch (e) {
        console.error(e);
        throw e; // Ném lỗi để xử lý ở nơi gọi hàm Delete.
    }
}