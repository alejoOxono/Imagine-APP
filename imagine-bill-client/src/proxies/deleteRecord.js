import axios from 'axios';

const deleteRecord = (route, id) => {
    axios
        .delete(`http://127.0.0.1:8000/api/${route}/${id}`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default deleteRecord