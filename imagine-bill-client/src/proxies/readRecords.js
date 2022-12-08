import axios from 'axios';

const readRecords = (setData, route) => {
    axios
        .get(`http://127.0.0.1:8000/api/${route}`)
        .then((response) => {
            let result = response.data;
            setData(result);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        })
}

export default readRecords