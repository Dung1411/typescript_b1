import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "./types/product";
import { useNavigate } from "react-router-dom";
import { listCate } from "../api/Category";
import { Select } from "antd";

type ProductAddProps = {
  onAdd: (product: ProductType) => void;
};
type FormInputs = {
  name: string;
  price: number;
  img: string;
  desc:string;
  category : string
};
const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState("");

  const onSubmits: SubmitHandler<FormInputs> = (data) => {
    props.onAdd({ ...data, img });
    navigate("/admin/products");
  };
  // call api 
  useEffect(() => {
    const getCategories = async () => {
      const response = await listCate();
      setCategory(response.data);
    };
    getCategories();
  }, []);

  async function handleGetImg(e: any) {
    const file = e.target.files[0];
    const CLOUDINARY_API =
      "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload";
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "cyfbktyp");
    const response = await axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data",
      },
    });
    // console.log(response);

    setImg(response.data.url);
  }

  return (
 
    <div className="w-full max-w-xs table_manager">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmits)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Tên sản phẩm
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Tên sản phẩm"
          />
          <p style={{ color: "red" }}>
            {errors.name?.type === "required" &&
              "Bạn không được để trống trường này !"}
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Giá
          </label>
          <input
            {...register("price", { required: true })}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="number"
            placeholder="Giá sản phẩm"
          />
          <p style={{ color: "red" }}>
            {errors.price?.type === "required" &&
              "Bạn không được để trống trường này !"}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Mô tả
          </label>
          <input
            {...register("desc", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="desc"
            type="text"
            placeholder="Mô tả"
          />
          <p style={{ color: "red" }}>
            {errors.desc?.type === "required" &&
              "Bạn không được để trống trường này !"}
          </p>
        </div>
        <Select
          className="mb-[20px]"
          defaultValue="Chọn danh mục.."
          style={{ width: "100%" }}
        onChange={(e) => setValue('category',e)}
        >
          {category.map((item: any) => {
            return <Select.Option value={item._id}>{item.name}</Select.Option>;
          })}
        </Select>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            img
          </label>
          <input
            onChange={handleGetImg}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="file"
            placeholder="Hình ảnh"
          />
          <img src={img} id="imgNow" width="300px" />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
