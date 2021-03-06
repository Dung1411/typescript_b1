// export {};
console.log("hello typescript");
 const a:number =30;
 const b: number = 50;

// khai bao
 type User = {
     id: number;
     name: string;
 }
 interface Admin{
    role:1
 }

 const myName: string = "le thi dung";
 const myAge: number | string = 24; //union
 const myObj: User = {id:1 , name:"dung"};
//  consst myObj: object = {};

// khai bao mang
const numberArr: number[] = [1,2,3,4];
const stringArr: string[] = ["a","b"];
const objectArr: User[] = [{id: 1, name: "A"},{id:2, name: "B"}]

function sum(numA: number, numB:number):number {
    return numA + numB;
}
console.log(sum(a,b));

const show = <T,U>(a: T, b: U)=>{
    return [a,b];
}
show(10,"20");
show("le","dung");

type Product = {
    id: number,
    name: string
}
const getProducts = <T extends Product>(products: T[])=>{
    const result = products.map(item => `<div>${item.name}</div>`)
}
getProducts([{id: 1,name: "A"}, {id:2, name: "B"}]);
