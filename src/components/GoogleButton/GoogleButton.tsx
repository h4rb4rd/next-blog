'use client'

import { Routes } from '@/routes'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

import styles from './styles.module.css'

export const GoogleButton = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || Routes.PROFILE

	return (
		<button
			className={styles.button}
			type='button'
			onClick={() => signIn('google', { callbackUrl })}
		>
			Sign in with Google
		</button>
	)
}
