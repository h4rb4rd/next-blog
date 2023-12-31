'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'

import styles from './styles.module.css'

interface Props {
	href: string
	children: React.ReactNode
	handleClick?: () => void
}

export const AppLink = ({ href, children, handleClick }: Props) => {
	const pathname = usePathname()

	const isActive = pathname === href

	return (
		<Link
			className={clsx(styles.link, isActive && styles.active)}
			href={href}
			onClick={handleClick}
		>
			{children}
		</Link>
	)
}
