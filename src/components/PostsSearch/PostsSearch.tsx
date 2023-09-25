import { FormEventHandler, useState } from 'react'

import { getPostsBySearch } from '@/services/getPostsBySearch'
import type { Post } from '@/types'

import styles from './styles.module.css'

interface Props {
	onSearch: (value: Post[]) => void
}

export const PostsSearch = ({ onSearch }: Props) => {
	const [search, setSearch] = useState('')

	const handleSubmit: FormEventHandler<HTMLFormElement> = async evt => {
		evt.preventDefault()

		const posts = await getPostsBySearch(search)

		onSearch(posts)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type='search'
				placeholder='search'
				value={search}
				onChange={evt => setSearch(evt.target.value)}
			/>
			<button className={styles.button} type='submit'>
				Search
			</button>
		</form>
	)
}
