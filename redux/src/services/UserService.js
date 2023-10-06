import axios from "axios";

export const getAll  = async () => {
    try {
        const result = await axios.get("http://localhost:8080/users");
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const deleteUser  = async (id) => {
    try {
        const result = await axios.delete("http://localhost:8080/users/"+id);
        return result.data;
    } catch (e) {
        console.log(e);
        throw e;
    }
}