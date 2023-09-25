import React from 'react'

import styles from './styles.module.css'

interface PageProps {
	children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
	return <div className={styles.page}>{children}</div>
}
