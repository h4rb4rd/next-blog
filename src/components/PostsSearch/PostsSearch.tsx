'use client'

import { FormEventHandler, useState } from 'react'

import { usePosts } from '@/store'

import styles from './styles.module.css'

export const PostsSearch = () => {
	const [search, setSearch] = useState('')
	const { getPostsBySearch } = usePosts(state => ({
		getPostsBySearch: state.getPostsBySearch,
	}))

	const handleSubmit: FormEventHandler<HTMLFormElement> = async evt => {
		evt.preventDefault()

		await getPostsBySearch(search)
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
