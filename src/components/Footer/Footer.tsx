import styles from './styles.module.css'

export const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<p>&copy; {year} h4rb4d</p>
		</footer>
	)
}
