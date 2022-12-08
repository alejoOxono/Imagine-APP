import axios from 'axios';

const updateRecord = (object, route, id) => {
    axios
        .put(`http://127.0.0.1:8000/api/${route}/${id}`, object)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default updateRecord