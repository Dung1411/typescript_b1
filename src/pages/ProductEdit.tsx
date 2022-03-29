import React , {useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/Product'
import { ProductType } from './types/product'

type ProductEditProps = {
    onUpdate: (product: ProductType)=> void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            // đồng bộ dữ liệu và show
            console.log(data);
            reset(data);
        }
        getProduct();
    }, [])



    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
        props.onUpdate(data);
        navigate('/admin/products')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', { required: true})} /> 
        { errors.name && <span>Fields is required</span>}
        <input type="number" {...register('price')} />
        <button>Update</button>
    </form>
  )
}

export default ProductEdit 