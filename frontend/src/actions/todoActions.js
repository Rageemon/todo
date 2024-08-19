import { ENDPOINT_URL } from "../constant/constants"

export const createToDo = (todo) => {
    return fetch(`${ENDPOINT_URL}/createToDo`,{
        method: `POST`,
        headers: {
            Accept: 'application/json',
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(todo)
    }).then((res) => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}

export const getAllToDo = () => {
    return fetch(`${ENDPOINT_URL}/getAllToDo `,{
        method: `GET`,
        headers: {
            Accept: 'application/json',
            'Content-type' : 'application/json'
        },
    }).then((res) => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}

export const updateTodoById = (id,todo) => {
    return fetch(`${ENDPOINT_URL}/updateTodoById/${id}`,{
        method : 'PATCH',
        headers : {
            Accept: 'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify(todo)
    }).then((res) => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}

export const delTodoById = (id) => {
    return fetch(`${ENDPOINT_URL}/delTodoById/${id}`,{
        method : 'DELETE',
        header : {
            Accept : 'application/json',
            'content-type' : 'application/json'
        }
    }).then((res) => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}