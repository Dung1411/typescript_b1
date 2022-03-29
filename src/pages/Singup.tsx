import React from 'react'
import { UserType } from './types/user'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addUser} from '../api/User'



type FormInputs = {
   id:  number,
   email: string,
   name: string,
   password: string
}
const Singup = () => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = async (data:UserType)   => {
      await addUser(data)
      navigate('/')
      // console.log(data);
      
  }
    


  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Email' {...register('email', {required: true})} />
        <input type="text" placeholder='Name' {...register('name', {required: true})} />
        <input type="text" placeholder='Password'  {...register('password', {required: true})}/>
        <button>Đăng Ký</button>
    </form>
  )
}
export default Singup