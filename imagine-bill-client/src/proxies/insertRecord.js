import axios from 'axios';

const insertRecord = (object, route) => {
    axios
        .post(`http://127.0.0.1:8000/api/${route}`, object)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default insertRecord