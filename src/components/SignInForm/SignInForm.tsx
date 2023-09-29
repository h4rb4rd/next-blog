'use client'

import type { FormEventHandler } from 'react'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import { Routes } from '@/routes'

import styles from './styles.module.css'

export const SignInForm = () => {
	const router = useRouter()

	const handleSubmit: FormEventHandler<HTMLFormElement> = async evt => {
		evt.preventDefault()

		const formData = new FormData(evt.currentTarget)

		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		})

		if (res && !res.error) {
			router.push(Routes.PROFILE)
		} else {
			console.log(res)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input className={styles.input} type='email' name='email' required />
			<input
				className={styles.input}
				type='password'
				name='password'
				required
			/>
			<button className={styles.button} type='submit'>
				Sign In
			</button>
		</form>
	)
}
