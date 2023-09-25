'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'

import styles from './styles.module.css'

interface Props {
	href: string
	children: React.ReactNode
}

export const AppLink = ({ href, children }: Props) => {
	const pathname = usePathname()

	const isActive = pathname === href

	return (
		<Link className={clsx(styles.link, isActive && styles.active)} href={href}>
			{children}
		</Link>
	)
}
