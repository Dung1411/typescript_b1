import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signin } from '../api/User'
import {useNavigate}  from 'react-router-dom'
type Props = {}

type InputForm = {
    email: string,
    password: string
}

const SignIn = (props: Props) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<InputForm>()
    const onSubmit: SubmitHandler<InputForm> = async data => {
        const { data: user } = await signin(data)
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/admin')
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Email' {...register('email', {required: true})} />
            <input type="text" placeholder='Password'  {...register('password', {required: true})}/>
            <button>Đăng Ký</button>
        </form>

    )
}

export default SignIn