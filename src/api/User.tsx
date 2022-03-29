import axios from 'axios';
import instance from "./Instance";
import { UserType} from '../pages/types/user'

export const addUser = (user: UserType) => {
    const url = `/users`;
    return instance.post(url, user);
}
export const signin = (user: UserType) => {
    const url = `/signin`;
    return instance.post(url, user);
}