import React from 'react'

import styles from './styles.module.css'

interface Props {
	children: React.ReactNode
}

export const Page = ({ children }: Props) => {
	return <div className={styles.page}>{children}</div>
}
