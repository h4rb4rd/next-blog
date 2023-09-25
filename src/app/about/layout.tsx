import { AppLink } from '@/components/AppLink'
import { Routes } from '@/routes'

import styles from './styles.module.css'

interface Props {
	children: React.ReactNode
}

export default function AboutLayout({ children }: Props) {
	return (
		<div className={styles.layout}>
			<aside className={styles.sidebar}>
				<ul className={styles.navigation}>
					<li>
						<AppLink href={Routes.ABOUT_CONTACTS}>Contacts</AppLink>
					</li>
					<li>
						<AppLink href={Routes.ABOUT_TEAM}>Team</AppLink>
					</li>
				</ul>
			</aside>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
