'use client'

import { useCallback, useEffect, useState } from 'react'

import { AppLink } from '../AppLink'
import { getAllPosts } from '@/services/getAllPosts'
import type { Post } from '@/types'
import { PostsSearch } from '../PostsSearch'
import { Routes } from '@/routes'

import styles from './styles.module.css'

export const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState(true)

	const handleSetPosts = useCallback((posts: Post[]) => {
		setPosts(posts)
	}, [])

	useEffect(() => {
		getAllPosts()
			.then(setPosts)
			.finally(() => setLoading(false))
	}, [])

	if (loading) return <h3>Loading...</h3>

	return (
		<>
			<PostsSearch onSearch={handleSetPosts} />
			<ul className={styles.posts}>
				{posts?.map(post => (
					<li key={post.id}>
						<AppLink href={`${Routes.BLOG}/${post.id}`}>
							{post.id} {post.title}
						</AppLink>
					</li>
				))}
			</ul>
		</>
	)
}
