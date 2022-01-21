import axios from 'axios'
import IShoppingListItem from "../Model/IShoppingListItem";
import ShoppingListItem from "../Model/IShoppingListItem";
import LoginData from "../Model/LoginData";

export const TOKEN_STORAGE_KEY = 'MY_TOKEN';
const config = {headers:{'Authorization': 'Bearer '+localStorage.getItem(TOKEN_STORAGE_KEY) || ""}}


export const getAllItems = () =>
    axios.get('/api/einkaufsliste', config).then(response => response.data)

export const getItemById = (id:String) =>
    axios.get(`/api/einkaufsliste/${id}`, config).then(response => response.data)

export const putItem = (e:ShoppingListItem) =>
    axios.put('/api/einkaufsliste', e, config)

export const getUser = () =>
    axios.get('/api/user/me').then(response => response.data)

// export const putUpdatedTodo = (todo:IShoppingListItem) =>
//     axios.put(`/api/einkaufsliste/${todo.id}/update`, todo)

export const deleteItem = (id:String) => axios.delete(`/api/einkaufsliste/${id}`, config)

export const postLogin = (login:LoginData) =>
    axios.post("/auth/login", login)