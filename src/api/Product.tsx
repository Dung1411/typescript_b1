import instance from "./Instance";
import {ProductType} from '../pages/types/product'

// nhớ cho tôi cái này nhé
// khi export default thì khi import sẽ khôngp phải dùng cái dấu {}
// còn khi export ra 1 biến : const , let ,var thì khi import phải dùng dấu {}
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