export type ProductType = {
    _id: number,
    name: string,
    price: number,
    desc: string,
    color: [{
      colorName : string,
      hex : string
    }],
    img: string,
    category: any
}
