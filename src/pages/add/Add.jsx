import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import cls from './add.module.scss'

import { sendPost } from '@/store/actions/postActions'

export default function Add() {
    const { handleSubmit, register, errors, reset} = useForm()
    const user = useSelector(({ user }) => user)
    const dispatch = useDispatch()

    const months = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноб", "Дек"]

    const sendForm = data => {
        const date = new Date()
        reset()

        dispatch(sendPost({
            date: `${date.getDate()} ${months[date.getMonth()]}`,
            text: data.text,
            likes: 0,
            author: {
                id: user.id,
                picture: user.picture,
                username: user.username
            }
        }))
    };

    return (
        <section className={cls.add}>
            <h1>Создать новый пост</h1>
            <form className={cls.form} onSubmit={handleSubmit(sendForm)}>
                <textarea name="text" className={cls.text} placeholder="Введите текст..." ref={register({ required: true, minLength: 44, maxLength: 280})}></textarea>
                {errors.text && <p className={cls.errorMsg}>Поле пустое</p>}
                <button type="submit" className={cls.btn}>Создать</button>
            </form>
        </section>
    )
}
