import { AppLink } from '../AppLink'
import { Routes } from '@/routes'

import styles from './styles.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
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
			</ul>
		</header>
	)
}
