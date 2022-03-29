import instance from "./Instance";
import {ProductType} from '../pages/types/product'

export const list = () =>{
    const url = `/products`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}