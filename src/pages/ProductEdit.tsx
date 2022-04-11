import React , {useEffect, useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/Product'
import { ProductType } from './types/product';
import axios from 'axios';

type ProductEditProps = {
    onUpdate: (product: ProductType)=> void
}
type FormInputs = {
    name: string,
    price: number,
    img : string
}

const ProductEdit = (props: ProductEditProps) => {
    // handleSubmit giải quyết submit from
    const { register, handleSubmit, formState: {errors}, reset,getValues,setValue,watch} = useForm<FormInputs>();
    const [image,setImage] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            // đồng bộ dữ liệu và show
            console.log(data);
            reset(data);
            // {}
            // {price : ,image}
            // console.log(getValues('img'));
            
        }
        getProduct();
        watch('img')
        // getValue gán url vô src
        // setValue gán url mới vào getValue => src
        // watch đứgn giữa set và get nó có nhiệm vụ lắng nghe sự thay đổi của trường đó
        // get <=> watch <=> set
    }, [])

    const onChageImage = async(event : any) => {
        console.log('file change');
        // console.log(event.target.files);
        
        const file = event.target.files[0]
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
        const formData = new FormData()
    
        formData.append('file', file);
        formData.append('upload_preset', "cyfbktyp");
        const response = await axios.post(CLOUDINARY_API, formData);
        console.log(response);
        setImage(response.data.url)
        setValue('img',response.data.url);
        
    }

    const onSubmit: SubmitHandler<FormInputs> = data => {
        // console.log(data);
        if(image == null){
            props.onUpdate(data);
        }else{
            props.onUpdate({...data,img : image});
        }
        navigate('/admin/products')
    }
    // console.log(errors.name);
    
  return (
    // <form className='table_manager' action="" onSubmit={handleSubmit(onSubmit)}>
    //     Tên sản phẩm: 
    //     <input type="text" {...register('name', { required: true})} />  <br />
    //     { errors.name && <span>Fields is required</span>}
    //     Giá sản phẩm: 
    //     <input type="number" {...register('price')} />
    //     <br />
    //     <button>Update</button>
    // </form>
    <div className="w-full max-w-xs table_manager">

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 table_manager" 
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Tên sản phẩm
            </label>
            <input {...register('name', {required: true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Tên sản phẩm" />
            <p style={{ color: 'red' }}>{errors.name?.type === 'required' ? "Bạn không được để trống trường này !" : null}</p>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Giá
            </label>
            <input {...register('price', {required: true})} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="Giá sản phẩm"/>
            <p style={{ color: 'red' }}>{errors.price?.type === 'required' && "Bạn không được để trống trường này !"}</p>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            img
            </label>
            <input onChange={onChageImage} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="file" placeholder="Giá sản phẩm"/>
            <img src={image == null ? getValues('img') : image}  id='imgNow' width='300px'/>
        </div>
        <div className="flex items-center justify-between">
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Edit
            </button>
            
        </div>
        </form>
    </div>

  )
}

export default ProductEdit 