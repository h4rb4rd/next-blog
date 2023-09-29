import { Metadata } from 'next'

import { GoogleButton } from '@/components/GoogleButton'
import { Page } from '@/components/Page'
import { SignInForm } from '@/components/SignInForm'

import styles from './styles.module.css'

export const metadata: Metadata = {
	title: 'Sign in | Next blog',
}

export default async function SignIn() {
	return (
		<Page>
			<h1 className={styles.title}>Sign in</h1>
			<GoogleButton />
			<div className={styles.or}>or</div>
			<SignInForm />
		</Page>
	)
}
