import axios from 'axios'
const url = 'http://localhost:3001/people'
//then выполняется не сразу, а после того как пришел ответ от сервера
const getFromServer = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
}
//стрелочная однострочная функция без фигурных скобок, return не нужен
const personDelete = (id) => axios.delete(`${url}/${id}`)

const personChange = (id, changedObject) => {
    const request = axios.put(`${url}/${id}`, changedObject)
    return request.then(response => response.data)
}

export default {
    getFromServer,
    create,
    personDelete,
    personChange
}