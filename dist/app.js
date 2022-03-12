"use strict";
// export {};
console.log("hello typescript");
const a = 30;
const b = 50;
const myName = "le thi dung";
const myAge = 24; //union
const myObj = { id: 1, name: "dung" };
//  consst myObj: object = {};
// khai bao mang
const numberArr = [1, 2, 3, 4];
const stringArr = ["a", "b"];
const objectArr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
function sum(numA, numB) {
    return numA + numB;
}
console.log(sum(a, b));
const show = (a, b) => {
    return [a, b];
};
show(10, "20");
show("le", "dung");
const getProducts = (products) => {
    const result = products.map(item => `<div>${item.name}</div>`);
};
getProducts([{ id: 1, name: "A" }, { id: 2, name: "B" }]);
//# sourceMappingURL=app.js.map