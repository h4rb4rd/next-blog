'use client'

import { useSession, signOut } from 'next-auth/react'

import { AppLink } from '../AppLink'
import { Routes } from '@/routes'

import styles from './styles.module.css'

export const Navigation = () => {
	const session = useSession()

	return (
		<ul className={styles.navigation}>
			<li>
				<AppLink href={Routes.MAIN}>Home</AppLink>
			</li>
			<li>
				<AppLink href={Routes.BLOG}>Blog</AppLink>
			</li>
			<li>
				<AppLink href={Routes.ABOUT}>About</AppLink>
			</li>
			{session?.data && (
				<li>
					<AppLink href={Routes.PROFILE}>Profile</AppLink>
				</li>
			)}
			{session?.data ? (
				<li>
					<AppLink
						href={Routes.SIGN_OUT}
						handleClick={() =>
							signOut({
								callbackUrl: '/',
							})
						}
					>
						Sign out
					</AppLink>
				</li>
			) : (
				<li>
					<AppLink href={Routes.SIGN_IN}>Sign in</AppLink>
				</li>
			)}
		</ul>
	)
}
