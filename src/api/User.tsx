import axios from 'axios';
import instance from "./Instance";
import { UserType} from '../pages/types/user'

export const list = () =>{
    const url = `/users`;
    return instance.get(url);
}

export const changeStatus = (id:any,data : any) => {
    const url = `/users/${id}`;
    return instance.put(url,data);
}

export const changeRole = (id:any,data : any) => {
    const url = `/users/${id}/role`;
    return instance.put(url,data);
}

export const getMe = (token : any) => {
    const url = '/getme';
    return instance.get(url,{
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
}

export const edit = (id: number,data : any) => {
    const url = `/users/${id}`;
    return instance.put(url,data);
}

export const addUser = (user: UserType) => {
    const url = `/users`;
    return instance.post(url, user);
}
export const signin = (user: UserType | any) => {
    const url = `/signin`;
    return instance.post(url, user);
}
export const signup = (user: UserType | any) => {
    const url = `/signup`;
    return instance.post(url, user);
}