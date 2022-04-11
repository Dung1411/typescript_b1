import axios from 'axios';
import instance from "./Instance";
import { UserType} from '../pages/types/user'

export const list = () =>{
    const url = `/users`;
    return instance.get(url);
}

export const edit = (id: number,data : any) => {
    const url = `/users/${id}`;
    return instance.put(url,data);
}

export const changeRole = (id: number,data : any) => {
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