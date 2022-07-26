import { CategoryType } from "../pages/types/category";
import instance from "./Instance";

export const listCate = () =>{
    const url = '/categories'
    return instance.get(url)
}
export const removeCategory = (id: number) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const addcate = (data: CategoryType) =>{
    const url = `/category`
    return instance.post(url, data)
}


export const readCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.get(url);
}

export const updateCate = (category: CategoryType) => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}